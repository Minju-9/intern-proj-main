import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import AccountTable from './AccountTable';
import Pagination from './Pagination';

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const [users, setUsers] = useState([]); // ✅ 백엔드 연동 데이터
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [searchTerm, setSearchTerm] = useState('');

  // ✅ 정렬 상태 추가
  const [sortField, setSortField] = useState("createdAt");
  const [direction, setDirection] = useState("DESC");

  // ✅ 백엔드에서 유저 목록 불러오기 (정렬+검색 반영)
  useEffect(() => {
    const query = new URLSearchParams({
      search: searchTerm,
      sortField,
      direction,
      page: currentPage - 1, // ✅ 백엔드는 0부터 시작
      size: itemsPerPage
    });

    fetch(`https://internproject-ohxn.onrender.com/admin/users?${query.toString()}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.content.map((user, index) => ({
          id: user.id,
          name: user.name || "-",
          email: user.email || "-",
          gender: user.gender || "-",
          age: user.age || "-",
          info: user.provider || "-",
          index: (currentPage - 1) * itemsPerPage + index + 1
        }));
        setUsers(formattedData);
      })
      .catch((err) => console.error("유저 목록 불러오기 실패:", err));
  }, [searchTerm, sortField, direction, currentPage]);

  // ✅ 검색 필터링 (프론트에서 추가 필터링 X → 백엔드가 이미 검색 처리함)

  const totalPages = Math.ceil(users.length / itemsPerPage);

  // ✅ 테이블 헤더 클릭 시 정렬 변경
  const handleSort = (field) => {
    if (sortField === field) {
      // 이미 같은 필드면 ASC ↔ DESC 토글
      setDirection(direction === "ASC" ? "DESC" : "ASC");
    } else {
      setSortField(field);
      setDirection("ASC");
    }
    setCurrentPage(1); // 첫 페이지로 초기화
  };

  return (
    <div className="App">
      <Sidebar isOpen={sidebarOpen} />
      <Header
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        userMenuOpen={userMenuOpen}
        toggleUserMenu={() => setUserMenuOpen(!userMenuOpen)}
      />

      <div className={`container ${sidebarOpen ? 'shifted' : ''}`}>
        <h2>계정 관리</h2>

        <SearchBar
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onSubmit={() => setCurrentPage(1)}
        />

        {/* ✅ AccountTable에 정렬 헤더 클릭 기능 전달 */}
        <AccountTable data={users} onSort={handleSort} sortField={sortField} direction={direction}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </AccountTable>
      </div>
    </div>
  );
}

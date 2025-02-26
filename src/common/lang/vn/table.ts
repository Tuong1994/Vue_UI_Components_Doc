const table_vn = {
  desc: 'Bảng hiển thị các hàng dữ liệu.',
  api: {
    tableDesc: {
      dataSource: 'Mảng dữ liệu cần hiển thị',
      columns: 'Các cột của bảng',
      hasRowSelection: 'Bật chọn hàng',
      hasExpand: 'Bật mở rộng cho bảng lồng nhau',
      hasFilter: 'Bật bộ lọc',
      hasPagination: 'Bật phân trang',
      loading: 'Trạng thái tải của bảng',
      rowKey: 'Khóa duy nhất của hàng',
      color: 'Màu sắc của bảng',
      rootClassName: 'Lớp của vùng chứa',
      tableClassName: 'Lớp của bảng',
      rootStyle: 'Kiểu nội tuyến của vùng chứa',
      tableStyle: 'Kiểu nội tuyến của bảng',
      paginationProps: 'Thuộc tính phân trang'
    },
    columnDesc: {
      id: 'ID duy nhất cho mỗi cột',
      title: 'Tiêu đề của mỗi cột',
      dataIndex: 'Trường hiển thị của bản ghi dữ liệu',
      component: 'Hiển thị component động của cột',
      render: 'Hiển thị HTML của cột bằng v-html'
    }
  }
}

export default table_vn

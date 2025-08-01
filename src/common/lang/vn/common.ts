const common_vn = {
  examples: 'Các ví dụ',
 usage: 'Cách dùng',
  type: {
    horizontal: 'Bố cục ngang',
    vertical: 'Bố cục dọc'
  },
  size: {
    sm: 'Nhỏ',
    md: 'Trung bình',
    lg: 'Lớn'
  },
  required: {
    yes: 'có',
    no: 'không'
  },
  header: {
    search: {
      empty: 'Không tìm thấy components nào'
    },
    mode: {
      light: 'Sáng',
      dark: 'Tối'
    },
    translate: {
      vn: 'Tiếng Việt',
      en: 'Tiếng Anh'
    }
  },
  form: {
    label: {
      account: 'Tài khoản',
      password: 'Mật khẩu',
      oldPassword: 'Mật khẩu cũ',
      newPassword: 'Mật khẩu mới',
      confirmPassword: 'Xác nhận mật khẩu',
      firstName: 'Tên',
      lastName: 'Họ',
      fullName: 'Họ và Tên',
      phone: 'Điện thoại',
      email: 'Email',
      gender: 'Giới tính',
      birthday: 'Ngày sinh',
      fullAddress: 'Địa chỉ',
      address_en: 'Địa chỉ (EN)',
      address_vn: 'Địa chỉ (VN)',
      city: 'Thành phố/Tỉnh',
      district: 'Quận/Huyện',
      ward: 'Phường/Xã',
      note: 'Ghi chú',
      status: 'Trạng thái',
      optional: 'Không bắt buộc'
    },
    placeholder: {
      enter: 'Nhập thông tin',
      select: 'Chọn',
      search: 'Tìm kiếm',
      imagesUpload: 'Chọn hoặc kéo thả hình ảnh vào khu vực này',
      filesUpload: 'Chọn tập tin'
    },
    rule: {
      required: 'Trường này là bắt buộc',
      phone: 'Điện thoại không hợp lệ',
      email: 'Email không hợp lệ',
      confirmPassword: 'Mật khẩu không trùng khớp',
      whiteSpace: 'Không được có khoảng trắng',
      match: 'Giá trị này không khớp',
      min: '{{min}} là tối thiểu',
      max: '{{max}} là tối đa',
      minLength: 'Phải có ít nhất {{min}} ký tự',
      maxLength: 'Độ dài tối đa là {{max}} ký tự',
      string: 'Giá trị phải là chuỗi',
      number: 'Giá trị phải là số'
    },
    others: {
      emptyOptions: 'Không có lựa chọn',
      optional: 'Không bắt buộc',
      fileSize: 'Kích thước tệp không được lớn hơn {{num}}MB',
      fileType: 'Chỉ chấp nhận loại tệp {{type}}',
      fileMax: 'Mỗi lần chỉ có thể tải lên {{num}} hình ảnh',
      newUploadImg: 'Hình ảnh mới',
      uploadedImg: 'Hình ảnh đã tải lên'
    }
  },
  actions: {
    ok: 'Ok',
    send: 'Gửi',
    save: 'Lưu',
    edit: 'Chỉnh sửa',
    update: 'Cập nhật',
    remove: 'Xóa',
    filter: 'Lọc',
    cancel: 'Hủy',
    get: 'Lây',
    copy: 'Sao chép',
    copied: 'Đã sao chép'
  },
  table: {
    head: {
      customerName: 'Họ và Tên',
      phone: 'Điện thoại',
      email: 'Email',
      gender: 'Giới tính',
      birthday: 'Ngày sinh',
      address: 'Địa chỉ',
      image: 'Hình ảnh',
      status: 'Trạng thái',
      props: 'Thuộc tính',
      desc: 'Mô tả',
      type: 'Kiểu dữ liệu',
      default: 'Mặc định',
      required: 'Bắt buộc',
      createdAt: 'Ngày tạo',
      updatedAt: 'Ngày cập nhật'
    }
  },
  pagination: {
    showing: 'Đang hiển thị',
    of: 'của',
    result: 'kết quả'
  },
  message: {
    success: {
      signIn: 'Đăng nhập thành công',
      signUp: 'Đăng ký thành công',
      logout: 'Đã đăng xuất',
      changePassword: 'Mật khẩu đã được thay đổi',
      resetPassword: 'Mật khẩu đã được đặt lại'
    },
    error: {
      authEmail: 'Email không đúng. Vui lòng thử lại',
      authPassword: 'Mật khẩu không đúng. Vui lòng thử lại',
      emailExist: 'Email này đã tồn tại',
      logout: 'Lỗi đăng xuất',
      remove: 'Lỗi không thể xóa',
      api: 'Đã xảy ra lỗi'
    }
  }
}

export default common_vn

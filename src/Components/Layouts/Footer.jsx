const Footer = () => {
    return (
        <footer className="bg-zinc-900 text-white py-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Cột 1: Thông tin website */}
                <div >
                    <h2 className="text-xl font-bold mb-4">Về chúng tôi</h2>
                    <p className="text-sm text-zinc-300">
                        Website xem phim trực tuyến miễn phí với chất lượng cao và cập nhật nhanh chóng. Hỗ trợ xem phim trên mọi thiết bị.
                    </p>
                </div>

                {/* Cột 2: Liên kết nhanh */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Liên kết nhanh</h2>
                    <ul className="space-y-2 text-sm text-zinc-300">
                        <li><a href="/" className="hover:text-red-500 transition">Trang chủ</a></li>
                        <li><a href="/phim-le" className="hover:text-red-500 transition">Phim lẻ</a></li>
                        <li><a href="/phim-bo" className="hover:text-red-500 transition">Phim bộ</a></li>
                        <li><a href="/the-loai" className="hover:text-red-500 transition">Thể loại</a></li>
                    </ul>
                </div>

                {/* Cột 3: Liên hệ */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Liên hệ</h2>
                    <p className="text-sm text-zinc-300">Email: congdao@gmail.com</p>
                    <p className="text-sm text-zinc-300">Hotline: 038.xxx.2841</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#"><i className="fab fa-facebook text-2xl hover:text-red-500"></i></a>
                        <a href="#"><i className="fab fa-youtube text-2xl hover:text-red-500"></i></a>
                        <a href="#"><i className="fab fa-twitter text-2xl hover:text-red-500"></i></a>
                    </div>
                </div>
            </div>

            {/* Dòng cuối */}
            <div className="mt-10 border-t border-zinc-700 pt-4 text-center text-sm text-zinc-400">
                © DAOHUUCONG.
            </div>
        </footer>
    );
};

export default Footer;

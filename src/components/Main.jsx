import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Main.css";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import CardTrekking from "./CardTrekking";
export default Main;
function Main() {
  const fadeImages = [
    "/img/img-slide4.jpg",
    "/img/img-slide.jpg",
    "/img/img-slide2.jpg",
  ];

  return (
    <div>
      <div className="header-container">
        <div className="font-header">
          <h5>TRANG CHỦ</h5>
          <h5>THUÊ DỤNG CỤ TRẠI</h5>
          <h5>VỀ CHÚNG TÔI</h5>
        </div>
        <div className="icons-header">
          <ShoppingCartOutlined className="icons" />
          <UserOutlined className="icons" />
        </div>
      </div>
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <img src={fadeImages[0]} className="img-slide" />
          </div>
          <div className="each-fade">
            <img src={fadeImages[1]} className="img-slide" />
          </div>
          <div className="each-fade">
            <img src={fadeImages[2]} className="img-slide" />
          </div>
        </Fade>
      </div>
      <div className="sec-2-bg">
        <p>TOUR TREKKING YÊU THÍCH</p>
        <h1>TREKKING TOUR</h1>
        <div className="box-card">
        <CardTrekking name="THÁM HIỂM HANG SƠN ĐÒONG - QUẢNG BÌNH" price="70.650.000₫" btn="SOLD OUT" img="/img/img-slide4.jpg" />
        <CardTrekking name="TREKKING TÀ NĂNG - PHAN DŨNG - 3N2Đ" price="4.300.000₫" btn="ĐẶT TOUR" img="/img/img-slide4.jpg"/>
        <CardTrekking name="TÀ ĐÙNG - VỊNH HẠ LONG GIỮA LÒNG TÂY NGUYÊN" price="2.800.000₫" btn="ĐẶT TOUR" img="/img/img-slide4.jpg"/>
        <CardTrekking name="ĐA MI - SUỐI NGUỒN TƯƠI TRẺ" price="1.900.000₫" btn="ĐẶT TOUR" img="/img/img-slide4.jpg"/>
        </div>
        </div>
    </div>
  );
}

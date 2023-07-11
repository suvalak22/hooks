import "./App.css";
import { useState } from "react";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [product1,setProduct1] = useState(1500);
  const [product2,setProduct2] = useState(8000);
  const [product3,setProduct3] = useState(3000);

  return (
    <div className="App">
      <div>
        <h3>จำนวนสินค้าในตะกร้า{totalItems}</h3>
        <h3>ราคาสินค้าในตะกร้าทั้งหมด {totalPrice} บาท </h3>
      </div>
      <div>
        <img src ="case.jpg" alt="case" width = '20%' /><br />
        เคสโทรศัพท์ ราคา {product1} บาท
      </div>
      <button 
        onClick={()=>{
          setTotalItems(totalItems+1);
          setTotalPrice(totalPrice+product1);
        }}
      >
        เพิ่มเข้าตะกร้า
      </button>
      <button onClick={()=>{
        if (totalItems>0) {
          setTotalItems(totalItems-1);
          setTotalPrice(totalPrice-product1);
        }
      }}
      >
      นำออกจากตะกร้า
      </button>
      <div>
        <img src ="หมวก.jpg" alt="cap" width = '20%' /><br />
        หมวก ราคา {product2} บาท
      </div>
      <button 
        onClick={()=>{
          setTotalItems(totalItems+1);
          setTotalPrice(totalPrice+product2);
        }}
      >
        เพิ่มเข้าตะกร้า
      </button>
      <button onClick={()=>{
        if (totalItems>0) {
          setTotalItems(totalItems-1);
          setTotalPrice(totalPrice-product2);
        }
      }}
      >
      นำออกจากตะกร้า
      </button>
      <div>
        <img src ="เสื้อ.jpg" alt="T-Sh" width = '20%' /><br />
        เสื้อ ราคา {product3} บาท
      </div>
      <button 
        onClick={()=>{
          setTotalItems(totalItems+1);
          setTotalPrice(totalPrice+product3);
        }}
      >
        เพิ่มเข้าตะกร้า
      </button>
      <button onClick={()=>{
        if (totalItems>0) {
          setTotalItems(totalItems-1);
          setTotalPrice(totalPrice-product3);
        }
      }}
      >
      นำออกจากตะกร้า
      </button>
    </div>
  );
}

export default App;
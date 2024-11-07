import React, { useState } from "react";
import { db } from "../firebase";  // นำเข้า db จาก firebaseConfig
import { collection, addDoc } from "firebase/firestore";  // ฟังก์ชันที่ใช้ใน Firestore

function DataEntryForm() {
  // State สำหรับเก็บข้อมูลที่กรอกจากฟอร์ม
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [set, setSet] = useState(1);  // ชุดที่ (1,2,3,4,5)

  // ฟังก์ชันสำหรับบันทึกข้อมูลไปยัง Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "user_data"), {
        name: name,
        address: address,
        phone: phone,
        date: date,
        set: set,
      });
      console.log("Document written with ID: ", docRef.id);

      // รีเซ็ตฟอร์มหลังจากบันทึกข้อมูล
      setName("");
      setAddress("");
      setPhone("");
      setDate("");
      setSet(1);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="container mt-4" > {/* เพิ่มระยะจาก navbar */}
      <div className="d-flex justify-content-center align-items-center"> {/* ปรับให้ไม่ล้นจากขนาดจอ */}
        <div className="container p-4 border shadow-sm" style={{ width: '100%', maxWidth: '500px' }}>
          <h3 className="text-center">บันทึกข้อมูล</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-2 row">
              <label htmlFor="name" className="form-label col-3">ชื่อ</label>
              <div className="col-9">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ width: '100%' }}  // กำหนดความกว้างให้เต็ม
                  required
                />
              </div>
            </div>

            <div className="mb-2 row">
              <label htmlFor="address" className="form-label col-3">ที่อยู่</label>
              <div className="col-9">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  style={{ width: '100%' }}  // กำหนดความกว้างให้เต็ม
                  required
                />
              </div>
            </div>

            <div className="mb-2 row">
              <label htmlFor="phone" className="form-label col-3">เบอร์โทร</label>
              <div className="col-9">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{ width: '100%' }}  // กำหนดความกว้างให้เต็ม
                  required
                />
              </div>
            </div>

            <div className="mb-2 row">
              <label htmlFor="date" className="form-label col-3">วันที่</label>
              <div className="col-9">
                <input
                  type="date"
                  className="form-control form-control-sm"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  style={{ width: '100%' }}  // กำหนดความกว้างให้เต็ม
                  required
                />
              </div>
            </div>

            <div className="mb-2 row">
              <label htmlFor="set" className="form-label col-3">ชุดที่</label>
              <div className="col-9">
                <select
                  className="form-select form-select-sm"
                  id="set"
                  value={set}
                  onChange={(e) => setSet(Number(e.target.value))}
                  style={{ width: '100%' }}  // กำหนดความกว้างให้เต็ม
                >
                  {[1, 2, 3, 4, 5].map((value) => (
                    <option key={value} value={value}>
                      ชุดที่ {value}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* ปุ่มบันทึกข้อมูลที่ด้านขวา */}
            <div className="text-end mt-3">
              <button type="submit" className="btn btn-primary btn-sm">
                บันทึกข้อมูล
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DataEntryForm;

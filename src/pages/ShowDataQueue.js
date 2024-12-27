import React, { useState, useEffect } from "react";
import { db } from "../firebase";  // นำเข้า db จาก firebaseConfig
import { collection, getDocs, doc, deleteDoc, query, orderBy } from "firebase/firestore";  // ฟังก์ชันที่ใช้ใน Firestore

function DataDisplay() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // ฟังก์ชันดึงข้อมูลจาก Firestore
  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        collection(db, "user_data"),
        orderBy("date", "desc")  // เรียงข้อมูลตามวันที่ใหม่ที่สุด
      );

      try {
        const querySnapshot = await getDocs(q);
        const dataArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setData(dataArray);
      } catch (error) {
        console.error("Error getting documents: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ฟังก์ชันสำหรับการลบข้อมูล
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "user_data", id));  // ลบข้อมูลจาก Firestore
      setData(data.filter(item => item.id !== id));  // ลบข้อมูลจาก state
      alert("ลบข้อมูลเรียบร้อยแล้ว");
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  if (loading) {
    return <div>กำลังโหลดข้อมูล...</div>;
  }

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">ข้อมูลทั้งหมด</h3>

      {/* แสดงข้อมูล */}
      <div className="row">
        {data.map((item) => (
          <div className="" key={item.id}>
                <h5 className="card-title">{item.name}</h5>
                <div className="card-text"><strong>วันที่:</strong> {item.date}</div>
                <div className="card-text"><strong>ชุดที่:</strong> {item.set}</div>
                
                {/* ปุ่มลบข้อมูล */}
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  ลบข้อมูล
                </button>
              </div>

        ))}
      </div>
    </div>
  );
}

export default DataDisplay;

import React from 'react'
import './App.css'

const MyLawnToday = () => {
  return <div></div>
}
const data = {
  "2024-11-01": 3, // 2024년 11월 1일에 활동 3회
  "2024-11-02": 0, // 2024년 11월 2일에 활동 없음
  "2024-11-03": 7, // 2024년 11월 3일에 활동 7회
  "2024-11-04": 2, // 2024년 11월 4일에 활동 2회
  // 이후 날짜들...
};
const MyLawnCalendar = ({ data }: { data: Record<string, number> }) => {
  // 색상 스케일 정의 (활동량에 따라 색상 조정)
  const getColor = (count: number) => {
    if (count > 4) return "#196127";
    if (count > 3) return "#239a3b";
    if (count > 2) return "#7bc96f";
    if (count > 0) return "#c6e48b";
    return "#eee";
  };

  // 달력 데이터 준비 (7행 x 53열)
  const weeks = Array.from({ length: 7 }, (_, row) =>
    Array.from({ length: 53 }, (_, col) => {
      const date = new Date();
      date.setDate(date.getDate() - (7 - row + col * 7));
      const dateStr = date.toISOString().split("T")[0];
      return { date: dateStr, count: data[dateStr] || 0 };
    })
  );

  return (
    <table>
      <tbody>
        {weeks.reverse().map((week, rowIndex) => (
          <tr key={rowIndex}>
            {week.map((day, colIndex) => (
              <td
                key={colIndex}
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: getColor(day.count),
                  border: "1px solid #ddd",
                }}
                title={`${day.date}: ${day.count} activities`}
              ></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function App() {
  return (<MyLawnCalendar data={data} />)
}

export default App

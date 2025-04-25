import React from 'react';

const newsData = [
  {
    id: 1,
    date: "April 5, 2023",
    title: "Apple Stock: Insiders Sell Their Shares, Future Prospects Not Promising (NASDAQ:AAPL)",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSX038mWwoZfkiVib-BpNYlK-gTwwZniM4bw&s",
  },
  {
    id: 2,
    date: "April 5, 2023",
    title: "Apple Stock: Insiders Sell Their Shares, Future Prospects Not Promising (NASDAQ:AAPL)",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSX038mWwoZfkiVib-BpNYlK-gTwwZniM4bw&s",
  },
  {
    id: 3,
    date: "April 5, 2023",
    title: "Apple Stock: Insiders Sell Their Shares, Future Prospects Not Promising (NASDAQ:AAPL)",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSX038mWwoZfkiVib-BpNYlK-gTwwZniM4bw&s",
  },
  {
    id: 4,
    date: "April 5, 2023",
    title: "Apple Stock: Insiders Sell Their Shares, Future Prospects Not Promising (NASDAQ:AAPL)",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSX038mWwoZfkiVib-BpNYlK-gTwwZniM4bw&s",
  },
  {
    id: 5,
    date: "April 5, 2023",
    title: "Apple Stock: Insiders Sell Their Shares, Future Prospects Not Promising (NASDAQ:AAPL)",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSX038mWwoZfkiVib-BpNYlK-gTwwZniM4bw&s",
  },
  {
    id: 6,
    date: "April 5, 2023",
    title: "Apple Stock: Insiders Sell Their Shares, Future Prospects Not Promising (NASDAQ:AAPL)",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSX038mWwoZfkiVib-BpNYlK-gTwwZniM4bw&s",
  },
];

const NewsGrid = () => {
  return (
    <div className="bg-gray-950  text-white p-6 md:p-10">
      <h2 className="text-xl md:text-2xl font-bold mb-6">News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {newsData.map((item) => (
          <div
            key={item.id}
            className="flex bg-gray-900 rounded-xl p-4 shadow-lg"
          >
            <img
              src={item.imageUrl}
              alt="news"
              className="w-16 h-16 rounded-lg object-cover mr-4"
            />
            <div>
              <p className="text-sm text-gray-400">{item.date}</p>
              <p className="text-base font-medium text-white">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsGrid;

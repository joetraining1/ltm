import React from "react";

const ShowCaseDisplayer = ({ category, dataset }) => {
  const [datas, setDatas] = useState(dataset ? dataset : []);

  const MultiArray = (arr, rows) => {
    const ArrSlice = arr.reduce((acc, val, ind) => {
      const currentRow = Math.floor(ind / rows);
      if (!acc[currentRow]) {
        acc[currentRow] = [val];
      } else {
        acc[currentRow].push(val);
      }
      return acc;
    }, []);
    const SortedArr = ArrSlice.map((item, index) => {
      return {
        pId: index,
        dataset: item,
      };
    });

    return SortedArr;
  };

  let activeDataset;

  const Hero = MultiArray(datas, 9);
  const HeroItem = Hero.map((item, index) => {
    if (pageActive === index) {
      return (activeDataset = item.dataset);
    }
    return null;
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "fit-content",
        gap: "1vw",
      }}
    >
      <Typography variant="h5" sx={H5style}>
        {category}
      </Typography>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          width: "100%",
          gap: "1vw",
        }}
      >
        {activeDataset?.map((item, index) => {
          return (
            <TypeCard
              title={item.title}
              key={item.id}
              desc={item.description}
              dibuat={item.createdAt.slice(0, 10)}
              ind={index}
              id={item.id}
              refresh={() => getType()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShowCaseDisplayer;

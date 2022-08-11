import c3 from "c3";

window.loadChart = (json) => {
  console.log("json is: ", json);

  const obj = JSON.parse(json);
  const data = obj.data;
  const type = obj.type;

  const chart = c3.generate({
    bindto: "#chart",
    size: {
      height: 480,
      width: 800,
    },
    data: {
      json: data,
      // [
      //   {
      //     "month": "Jan",
      //     "Peaches": 327,
      //     "Bananas": 437,
      //     "Pears": 111
      //   },
      //   {
      //     "month": "Feb",
      //     "Peaches": 555,
      //     "Bananas": 454,
      //     "Pears": 222
      //   },
      //   {
      //     "month": "Mar",
      //     "Peaches": 242,
      //     "Bananas": 864,
      //     "Pears": 343
      //   },
      //   {
      //     "month": "Apr",
      //     "Peaches": 222,
      //     "Bananas": 454,
      //     "Pears": 434
      //   }
      // ],
      keys: {
        x: "month",
        value: ["Peaches", "Bananas", "Pears"],
      },

      type: type,
      labels: true,
    },
    axis: {
      x: {
        show: true,
        type: "category",
      },
      y: {
        show: true,
      },
    },
    color: {
      pattern: ["#e09cf7", "#9edbf7", "#9ef7bd"],
    },
  });
};

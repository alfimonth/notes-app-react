const getData = () => {
  return [
    {
      id: 1,
      title: "Babel",
      body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
      archived: false,
      createdAt: '2022-04-14T04:27:34.572Z'
    },
    {
      id: 2,
      title: "Vite",
      body: "is a new breed of frontend build tooling that significantly improves the frontend development.",
      archived: true,
      createdAt: '2022-04-14T04:27:34.572Z'
    },
    {
      id: 3,
      title: "React",
      body: "React adalah sebuah library JavaScript yang digunakan untuk membangun user interface yang interaktif",
      archived: false,
      createdAt: '2022-04-14T04:27:34.572Z'
    },

  ]
}

export { getData };
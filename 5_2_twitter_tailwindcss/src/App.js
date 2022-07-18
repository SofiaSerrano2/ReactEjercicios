import SideVar from "./componentes/SideVar";


function App() {
  const pageList=[{"nombre":"Home","icon":"fa-solid fa-house","clase":""},
                  {"nombre":"Explore","icon":"fa-solid fa-compass","clase":""},
                  {"nombre":"Notifications","icon":"fa-solid fa-bell","clase":""},
                  {"nombre":"Messages","icon":"fa-solid fa-comment","clase":""},
                  {"nombre":"BookMarks","icon":"fa-solid fa-bookmark","clase":""},
                  {"nombre":"List","icon":"fa-solid fa-list-ul","clase":""},
                  {"nombre":"Profile","icon":"fa-solid fa-user","clase":""},
                  {"nombre":"More","icon":"fa-solid fa-ellipsis","clase":""},
                  ]
  return (
    <div className="App">
      <SideVar pagList={pageList}/>
      
    </div>
  );
}

export default App;

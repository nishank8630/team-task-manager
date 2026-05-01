// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React from "react";

// function App() {
//   return (
//     <div style={{
//       height:"100vh",
//       display:"flex",
//       justifyContent:"center",
//       alignItems:"center",
//       background:"#eef2ff"
//     }}>

//       <div style={{
//         width:"380px",
//         background:"white",
//         padding:"35px",
//         borderRadius:"18px",
//         boxShadow:"0 15px 35px rgba(0,0,0,0.08)"
//       }}>

//         <h1 style={{
//           textAlign:"center",
//           color:"#4f46e5"
//         }}>
//           Team Task Manager
//         </h1>

//         <p style={{
//           textAlign:"center",
//           color:"gray"
//         }}>
//           Premium Login Portal
//         </p>

//         <input
//           placeholder="Email"
//           style={{
//             width:"100%",
//             padding:"12px",
//             marginTop:"20px"
//           }}
//         />

//         <input
//           placeholder="Password"
//           type="password"
//           style={{
//             width:"100%",
//             padding:"12px",
//             marginTop:"15px"
//           }}
//         />

//         <button style={{
//           width:"100%",
//           padding:"12px",
//           marginTop:"20px",
//           background:"#4f46e5",
//           color:"white",
//           border:"none",
//           borderRadius:"10px",
//           fontWeight:"bold"
//         }}>
//           Login
//         </button>

//       </div>

//     </div>
//   );
// }

// export default App;
// import React from "react";

// function App() {
//   return (
//     <div style={{
//       display: "flex",
//       height: "100vh",
//       fontFamily: "Arial, sans-serif",
//       background: "#f8fafc"
//     }}>
      
//       {/* Sidebar */}
//       <div style={{
//         width: "250px",
//         background: "#111827",
//         color: "white",
//         padding: "30px 20px"
//       }}>
//         <h2 style={{marginBottom:"40px"}}>🚀 TaskFlow</h2>

//         <p style={{padding:"12px 0"}}>🏠 Dashboard</p>
//         <p style={{padding:"12px 0"}}>📁 Projects</p>
//         <p style={{padding:"12px 0"}}>✅ Tasks</p>
//         <p style={{padding:"12px 0"}}>👥 Team</p>
//         <p style={{padding:"12px 0"}}>⚙️ Settings</p>
//       </div>

//       {/* Main */}
//       <div style={{
//         flex:1,
//         padding:"30px"
//       }}>

//         <h1 style={{marginBottom:"20px"}}>Welcome Back, Vansh 👋</h1>

//         {/* Cards */}
//         <div style={{
//           display:"grid",
//           gridTemplateColumns:"repeat(4,1fr)",
//           gap:"20px"
//         }}>

//           {[
//             ["Total Tasks","24"],
//             ["Completed","18"],
//             ["Pending","4"],
//             ["Overdue","2"]
//           ].map((item,index)=>(
//             <div key={index} style={{
//               background:"white",
//               padding:"25px",
//               borderRadius:"16px",
//               boxShadow:"0 10px 20px rgba(0,0,0,0.05)"
//             }}>
//               <p style={{color:"gray"}}>{item[0]}</p>
//               <h2>{item[1]}</h2>
//             </div>
//           ))}

//         </div>

//         {/* Task Table */}
//         <div style={{
//           marginTop:"30px",
//           background:"white",
//           padding:"25px",
//           borderRadius:"16px",
//           boxShadow:"0 10px 20px rgba(0,0,0,0.05)"
//         }}>
//           <h3>Recent Tasks</h3>

//           <table width="100%" style={{marginTop:"20px"}}>
//             <tr>
//               <th align="left">Task</th>
//               <th>Status</th>
//               <th>Due</th>
//             </tr>

//             <tr>
//               <td>Design Dashboard UI</td>
//               <td>✅ Completed</td>
//               <td>Today</td>
//             </tr>

//             <tr>
//               <td>Backend API Setup</td>
//               <td>🟡 Pending</td>
//               <td>Tomorrow</td>
//             </tr>

//             <tr>
//               <td>Deploy Railway</td>
//               <td>🔴 Overdue</td>
//               <td>Yesterday</td>
//             </tr>

//           </table>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default App;

// function App() {
//   return (
//     <div className="min-h-screen bg-slate-100 flex">

//       {/* Sidebar */}
//       <div className="w-64 bg-indigo-700 text-white p-6">
//         <h1 className="text-2xl font-bold mb-10">TaskFlow</h1>

//         <ul className="space-y-4">
//           <li className="bg-indigo-500 p-3 rounded-lg">Dashboard</li>
//           <li className="hover:bg-indigo-500 p-3 rounded-lg">Projects</li>
//           <li className="hover:bg-indigo-500 p-3 rounded-lg">Tasks</li>
//           <li className="hover:bg-indigo-500 p-3 rounded-lg">Team</li>
//           <li className="hover:bg-indigo-500 p-3 rounded-lg">Logout</li>
//         </ul>
//       </div>

//       {/* Main */}
//       <div className="flex-1 p-8">

//         <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

//         {/* Cards */}
//         <div className="grid grid-cols-4 gap-5 mb-8">

//           <div className="bg-white p-5 rounded-2xl shadow">
//             <h3 className="text-gray-500">Total Tasks</h3>
//             <p className="text-3xl font-bold mt-2">24</p>
//           </div>

//           <div className="bg-white p-5 rounded-2xl shadow">
//             <h3 className="text-gray-500">Completed</h3>
//             <p className="text-3xl font-bold mt-2 text-green-600">12</p>
//           </div>

//           <div className="bg-white p-5 rounded-2xl shadow">
//             <h3 className="text-gray-500">Pending</h3>
//             <p className="text-3xl font-bold mt-2 text-orange-500">8</p>
//           </div>

//           <div className="bg-white p-5 rounded-2xl shadow">
//             <h3 className="text-gray-500">Overdue</h3>
//             <p className="text-3xl font-bold mt-2 text-red-500">4</p>
//           </div>

//         </div>

//         {/* Recent Tasks */}
//         <div className="bg-white rounded-2xl shadow p-6">
//           <h3 className="text-xl font-bold mb-4">Recent Tasks</h3>

//           <table className="w-full">
//             <thead>
//               <tr className="text-left border-b">
//                 <th className="pb-3">Task</th>
//                 <th>Status</th>
//                 <th>Assigned</th>
//                 <th>Due</th>
//               </tr>
//             </thead>

//             <tbody>
//               <tr className="border-b">
//                 <td className="py-3">Landing Page UI</td>
//                 <td className="text-green-600">Completed</td>
//                 <td>Vansh</td>
//                 <td>30 Apr</td>
//               </tr>

//               <tr className="border-b">
//                 <td className="py-3">API Integration</td>
//                 <td className="text-orange-500">Pending</td>
//                 <td>Rahul</td>
//                 <td>2 May</td>
//               </tr>

//               <tr>
//                 <td className="py-3">Bug Fixing</td>
//                 <td className="text-red-500">Overdue</td>
//                 <td>Ankit</td>
//                 <td>28 Apr</td>
//               </tr>
//             </tbody>

//           </table>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default App;
// 26 99 205 
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

// function Sidebar() {
//   const navigate = useNavigate();

//   const logout = () => {
//     alert("Logged Out");
//     navigate("/");
//   };

//   return (
//     <div className="w-64 min-h-screen bg-indigo-700 text-white p-6">
//       <h1 className="text-3xl font-bold mb-10">TaskFlow</h1>

//       <ul className="space-y-4">
//         <li>
//           <Link to="/dashboard" className="block bg-indigo-500 p-3 rounded-lg">
//             Dashboard
//           </Link>
//         </li>

//         <li>
//           <Link to="/projects" className="block hover:bg-indigo-500 p-3 rounded-lg">
//             Projects
//           </Link>
//         </li>

//         <li>
//           <Link to="/tasks" className="block hover:bg-indigo-500 p-3 rounded-lg">
//             Tasks
//           </Link>
//         </li>

//         <li>
//           <Link to="/team" className="block hover:bg-indigo-500 p-3 rounded-lg">
//             Team
//           </Link>
//         </li>

//         <li>
//           <button
//             onClick={logout}
//             className="w-full text-left hover:bg-red-500 p-3 rounded-lg"
//           >
//             Logout
//           </button>
//         </li>
//       </ul>
//     </div>
//   );
// }

// function Layout({ children }) {
//   return (
//     <div className="flex bg-slate-100 min-h-screen">
//       <Sidebar />
//       <div className="flex-1 p-8">{children}</div>
//     </div>
//   );
// }

// function Login() {
//   const navigate = useNavigate();

//   const login = () => {
//     navigate("/dashboard");
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-slate-100">
//       <div className="bg-white p-8 rounded-2xl shadow w-96">
//         <h1 className="text-3xl font-bold text-center text-indigo-700">
//           TaskFlow Login
//         </h1>

//         <input
//           placeholder="Email"
//           className="w-full border p-3 mt-6 rounded-lg"
//         />

//         <input
//           placeholder="Password"
//           type="password"
//           className="w-full border p-3 mt-4 rounded-lg"
//         />

//         <button
//           onClick={login}
//           className="w-full bg-indigo-600 text-white p-3 mt-5 rounded-lg"
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <Layout>
//       <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

//       <div className="grid grid-cols-4 gap-5 mb-8">
//         <Card title="Total Tasks" value="24" />
//         <Card title="Completed" value="12" color="text-green-600" />
//         <Card title="Pending" value="8" color="text-orange-500" />
//         <Card title="Overdue" value="4" color="text-red-500" />
//       </div>

//       <div className="bg-white p-6 rounded-2xl shadow">
//         <h2 className="text-2xl font-bold">Recent Tasks</h2>
//         <p className="mt-4 text-gray-500">Task tracking system active.</p>
//       </div>
//     </Layout>
//   );
// }

// function Projects() {
//   return (
//     <Layout>
//       <h1 className="text-4xl font-bold mb-8">Projects</h1>

//       <div className="bg-white p-6 rounded-2xl shadow">
//         <p>📁 Website Redesign</p>
//         <p className="mt-3">📁 Mobile App UI</p>
//         <p className="mt-3">📁 CRM Dashboard</p>
//       </div>
//     </Layout>
//   );
// }

// function Tasks() {
//   return (
//     <Layout>
//       <h1 className="text-4xl font-bold mb-8">Tasks</h1>

//       <div className="bg-white p-6 rounded-2xl shadow">
//         <p>✅ Landing Page UI</p>
//         <p className="mt-3">🕒 API Integration</p>
//         <p className="mt-3">❌ Bug Fixing</p>
//       </div>
//     </Layout>
//   );
// }

// function Team() {
//   return (
//     <Layout>
//       <h1 className="text-4xl font-bold mb-8">Team Members</h1>

//       <div className="bg-white p-6 rounded-2xl shadow">
//         <p>👨 Vansh - Admin</p>
//         <p className="mt-3">👨 Rahul - Developer</p>
//         <p className="mt-3">👨 Ankit - Tester</p>
//       </div>
//     </Layout>
//   );
// }

// function Card({ title, value, color }) {
//   return (
//     <div className="bg-white p-5 rounded-2xl shadow">
//       <h3 className="text-gray-500">{title}</h3>
//       <p className={`text-3xl font-bold mt-2 ${color}`}>{value}</p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/tasks" element={<Tasks />} />
//         <Route path="/team" element={<Team />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// -------new
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import axios from "axios";

/* ---------------- Sidebar ---------------- */

function Sidebar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="w-64 min-h-screen bg-indigo-700 text-white p-6">
      <h1 className="text-3xl font-bold mb-10">TaskFlow</h1>

      <ul className="space-y-4">

        <li>
          <Link to="/dashboard" className="block p-3 rounded-lg bg-indigo-500">
            Dashboard
          </Link>
        </li>

        {role === "admin" && (
          <li>
            <Link to="/projects" className="block p-3 rounded-lg hover:bg-indigo-500">
              Projects
            </Link>
          </li>
        )}

        <li>
          <Link to="/tasks" className="block p-3 rounded-lg hover:bg-indigo-500">
            Tasks
          </Link>
        </li>

        {role === "admin" && (
          <li>
            <Link to="/team" className="block p-3 rounded-lg hover:bg-indigo-500">
              Team
            </Link>
          </li>
        )}

        <li>
          <button
            onClick={logout}
            className="w-full text-left p-3 rounded-lg hover:bg-red-500"
          >
            Logout
          </button>
        </li>

      </ul>
    </div>
  );
}

/* ---------------- Layout ---------------- */

function Layout({ children }) {
  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">{children}</div>
    </div>
  );
}

/* ---------------- Login / Signup ---------------- */

function Login() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("member");
  const API = `${process.env.REACT_APP_API}/api/auth`;

  const register = async () => {
    try {
      await axios.post(`${API}/register`, {
        name,
        email,
        password,
        role
      });

      alert("Signup Successful");
      setIsLogin(true);
    } catch (err) {
      alert("Signup Error");
    }
  };

  const login = async () => {
    try {
      const res = await axios.post(`${API}/login`, {
        email,
        password
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);

      alert("Login Success");
      navigate("/dashboard");
    } catch (err) {
      alert("Wrong Credentials");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">
      <div className="bg-white p-8 rounded-2xl shadow w-96">
        <h1 className="text-3xl font-bold text-center text-indigo-700">
          TaskFlow
        </h1>

        <p className="text-center mt-2 text-gray-500">
          {isLogin ? "Login" : "Signup"}
        </p>

        {!isLogin && (
          <input
            placeholder="Name"
            className="w-full border p-3 mt-5 rounded-lg"
            onChange={(e) => setName(e.target.value)}
          />
        )}

        {!isLogin && (
          <select
            value={role}
            onChange={(e)=>setRole(e.target.value)}
            className="w-full border p-3 mt-4 rounded-lg"
>
            <option value="admin">Admin</option>
            <option value="member">Member</option>
          </select>
       )}

        <input
          placeholder="Email"
          className="w-full border p-3 mt-4 rounded-lg"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          className="w-full border p-3 mt-4 rounded-lg"
          onChange={(e) => setPassword(e.target.value)}
        />

        {isLogin ? (
          <button
            onClick={login}
            className="w-full bg-indigo-600 text-white p-3 mt-5 rounded-lg"
          >
            Login
          </button>
        ) : (
          <button
            onClick={register}
            className="w-full bg-green-600 text-white p-3 mt-5 rounded-lg"
          >
            Signup
          </button>
        )}

        <p
          onClick={() => setIsLogin(!isLogin)}
          className="text-center mt-5 cursor-pointer text-indigo-600"
        >
          {isLogin ? "Create Account" : "Already have account?"}
        </p>
      </div>
    </div>
  );
}

/* ---------------- Dashboard ---------------- */

function Dashboard() {
  const [stats, setStats] = React.useState({
    total:0,
    completed:0,
    pending:0,
    overdue:0
  });

  React.useEffect(()=>{
    fetchStats();
  },[]);

  const fetchStats = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/tasks/stats/all"
    );

    setStats(res.data);
  };

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-5 mb-8">

        <Card
          title="Total Tasks"
          value={stats.total}
        />

        <Card
          title="Completed"
          value={stats.completed}
          color="text-green-600"
        />

        <Card
          title="Pending"
          value={stats.pending}
          color="text-orange-500"
        />

        <Card
          title="Overdue"
          value={stats.overdue}
          color="text-red-500"
        />

      </div>

      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-bold">
          Live Productivity Board
        </h2>

        <p className="mt-4 text-gray-500">
          Real-time stats from MongoDB.
        </p>
      </div>

    </Layout>
  );
}

/* ---------------- Projects ---------------- */

function Projects() {
  const [title, setTitle] = React.useState("");
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await axios.get("http://localhost:5000/api/projects/all");
    setProjects(res.data);
  };

  const addProject = async () => {
    await axios.post("http://localhost:5000/api/projects/add", {
      title
    });

    setTitle("");
    fetchProjects();
  };

  const deleteProject = async (id) => {
    await axios.delete(`http://localhost:5000/api/projects/${id}`);
    fetchProjects();
  };

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">Projects</h1>

      <div className="bg-white p-6 rounded-2xl shadow">

        <input
          placeholder="Project Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-3 rounded-lg mr-3"
        />

        <button
          onClick={addProject}
          className="bg-indigo-600 text-white px-5 py-3 rounded-lg"
        >
          Add
        </button>

        <div className="mt-6 space-y-3">
          {projects.map((item) => (
            <div
              key={item._id}
              className="flex justify-between bg-slate-100 p-3 rounded-lg"
            >
              <span>{item.title}</span>

              <button
                onClick={() => deleteProject(item._id)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

      </div>
    </Layout>
  );
}

/* ---------------- Tasks ---------------- */
function Tasks() {
  const [title, setTitle] = React.useState("");
  const [assignedTo, setAssignedTo] = React.useState("");
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/tasks/all");
    setTasks(res.data);
  };

  const addTask = async () => {
    try {
      await axios.post("http://localhost:5000/api/tasks/add", {
        title,
        assignedTo
      });

      setTitle("");
      setAssignedTo("");
      fetchTasks();

    } catch (error) {
      alert("Task add failed");
    }
  };

  const updateStatus = async (id, status) => {
    await axios.put(`http://localhost:5000/api/tasks/${id}`, {
      status
    });

    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    fetchTasks();
  };

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">Tasks</h1>

      <div className="bg-white p-6 rounded-2xl shadow">

        <div className="flex gap-3 mb-5">
          <input
            placeholder="Task Name"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className="border p-3 rounded-lg"
          />

          <input
            placeholder="Assign To"
            value={assignedTo}
            onChange={(e)=>setAssignedTo(e.target.value)}
            className="border p-3 rounded-lg"
          />

          <button
            onClick={addTask}
            className="bg-indigo-600 text-white px-5 rounded-lg"
          >
            Add
          </button>
        </div>

        <div className="space-y-3">
          {tasks.map((item)=>(
            <div
              key={item._id}
              className="bg-slate-100 p-4 rounded-lg flex justify-between items-center"
            >
              <div>
                <p className="font-bold">{item.title}</p>
                <p className="text-sm text-gray-500">
                  {item.assignedTo} | {item.status}
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={()=>updateStatus(item._id,"Completed")}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Done
                </button>

                <button
                  onClick={()=>deleteTask(item._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Layout>
  );
}

/* ---------------- Team ---------------- */

function Team() {
  const [name, setName] = React.useState("");
  const [role, setRole] = React.useState("");
  const [members, setMembers] = React.useState([]);

  const addMember = () => {
    if (!name || !role) {
      alert("Enter name and role");
      return;
    }

    const newMember = {
      id: Date.now(),
      name,
      role
    };

    setMembers([newMember, ...members]);
    setName("");
    setRole("");
  };

  const deleteMember = (id) => {
    const updated = members.filter((item) => item.id !== id);
    setMembers(updated);
  };

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">
        Team Members
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow">

        <div className="flex gap-3 mb-6">
          <input
            placeholder="Member Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="border p-3 rounded-lg"
          />

          <input
            placeholder="Role"
            value={role}
            onChange={(e)=>setRole(e.target.value)}
            className="border p-3 rounded-lg"
          />

          <button
            onClick={addMember}
            className="bg-indigo-600 text-white px-5 rounded-lg"
          >
            Add
          </button>
        </div>

        <div className="space-y-3">
          {members.map((item)=>(
            <div
              key={item.id}
              className="bg-slate-100 p-4 rounded-lg flex justify-between"
            >
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-gray-500 text-sm">
                  {item.role}
                </p>
              </div>

              <button
                onClick={()=>deleteMember(item.id)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

      </div>
    </Layout>
  );
}

/* ---------------- Card ---------------- */

function Card({ title, value, color }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      <h3 className="text-gray-500">{title}</h3>
      <p className={`text-3xl font-bold mt-2 ${color}`}>{value}</p>
    </div>
  );
}

/* ---------------- App ---------------- */

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
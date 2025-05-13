<<<<<<< HEAD
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);
=======

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './components/ThemeProvider'

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark">
    <App />
  </ThemeProvider>
);
>>>>>>> 1f36983f5ea400c76f58f5216bf433352cb286fb

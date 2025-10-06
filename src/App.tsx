import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import StudyGroups from "./pages/StudyGroups";
import Questions from "./pages/Questions";
import Alumni from "./pages/Alumni";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Mentorship from "./pages/Mentorship";
import Events from "./pages/Events";
import Workshops from "./pages/Workshops";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/groups" element={<StudyGroups />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/events" element={<Events />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/profile" element={<Profile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { create } from "zustand";
import { getAllTasks } from "../API/getAllTasks";
import { getStatuses } from "../API/getStatuses";
import { getDepartments } from "../API/getDepartments";
import { getPriorities } from "../API/getPriorities";
import { getAllEmployees } from "../API/getAllEmployees";

export const useFilterStore = create((set) => ({
  // by Departments
  filteredByDepartments: JSON.parse(window.sessionStorage.getItem("filteredByDepartments")) || [], // choosed departments
  filteringByDepartments: JSON.parse(window.sessionStorage.getItem("filteringByDepartments")) || [], // useing it when user is choosing departments
  setFilteredByDepartments: (newValue) => {
    set({ filteredByDepartments: newValue });
  },
  setFilteringByDepartments: (newValue) => {
    set({ filteringByDepartments: newValue });
  },

  // by Priorities
  filteredByPriorities: JSON.parse(window.sessionStorage.getItem("filteredByPriorities")) || [],
  filteringByPriorities: JSON.parse(window.sessionStorage.getItem("filteringByPriorities")) || [],
  setFilteredByPriorities: (newValue) => {
    set({ filteredByPriorities: newValue });
  },
  setFilteringByPriorities: (newValue) => {
    set({ filteringByPriorities: newValue });
  },

  // by Employees
  filteredByEmployees: JSON.parse(window.sessionStorage.getItem("filteredByEmployees")) || [],
  filteringByEmployees: JSON.parse(window.sessionStorage.getItem("filteringByEmployees")) || [],
  setFilteredByEmployees: (newValue) => {
    set({ filteredByEmployees: newValue });
  },
  setFilteringByEmployees: (newValue) => {
    set({ filteringByEmployees: newValue });
  },


    // clear all filters function
    clearFilters: () => {
        set({
            filteredByDepartments: [],
            filteringByDepartments: [],
            filteredByPriorities: [],
            filteringByPriorities: [],
            filteredByEmployees: [],
            filteringByEmployees: [],
        })

        window.sessionStorage.clear("filteredByDepartments")
        window.sessionStorage.clear("filteredByPriorities")
        window.sessionStorage.clear("filteredByEmployees")
        window.sessionStorage.clear("filteringByDepartments")
        window.sessionStorage.clear("filteringByPriorities")
        window.sessionStorage.clear("filteringByEmployees")
    }   
}));

export const useTasksStore = create((set) => ({
  tasks: JSON.parse(window.sessionStorage.getItem("tasks")) || [],
  filteredTasks: [],
  setFilteredTasks: (value) => {
    set({ filteredTasks: value });
  },
  isTasksLoading: false,
  fetchTasks: async () => {
    try {
      set({ isTasksLoading: true });
      const data = await getAllTasks();
      window.sessionStorage.setItem("tasks", JSON.stringify(data));
      set({ tasks: data, filteredTasks: data});
    } catch (error) {
      console.log(error);
    } finally {
      set({ isTasksLoading: false });
    }
  },
}));

export const useStatusesStore = create((set) => ({
  statuses: [],
  isStatusesLoading: false,
  fetchStatuses: async () => {
    try {
      set({ isStatusesLoading: true });
      const data = await getStatuses();
      set({ statuses: data });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isStatusesLoading: false });
    }
  },
}));

export const useDepartmentsStore = create((set) => ({
  departments: [],
  fetchDepartments: async () => {
    try {
      const data = await getDepartments();
      set({ departments: data });
    } catch (error) {
      console.log(error);
    }
  },
}));

export const usePrioritiesStore = create((set) => ({
  priorities: [],
  fetchPriorities: async () => {
    try {
      const data = await getPriorities();
      set({ priorities: data });
    } catch (error) {
      console.log(error);
    }
  },
}));

export const useEmployeesStore = create((set) => ({
  employees: [],
  fetchEmployees: async () => {
    try {
      const data = await getAllEmployees();
      set({ employees: data });
    } catch (error) {
      console.log(error);
    }
  },
}));



// Comments
export const useCommentsStore = create((set) => ({
  comments: [],
  commentText: "",
  setComments: (value) => {
    set({ comments: value })
  },
  setCommentText: (value) => {
    set({ commentText: value})
  }
}))
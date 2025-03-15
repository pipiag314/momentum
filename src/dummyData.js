export const statuses = [
  {
    id: 1,
    name: "დასაწყები",
  },
  {
    id: 2,
    name: "პროგრესში",
  },
  {
    id: 3,
    name: "მზად ტესტირებისთვის",
  },
  {
    id: 4,
    name: "დასრულებული",
  },
];

export const priorities = [
  {
    id: 1,
    name: "დაბალი",
    icon: "https://momentum.redberryinternship.ge/storage/priority-icons/Low.svg",
  },
  {
    id: 2,
    name: "საშუალო",
    icon: "https://momentum.redberryinternship.ge/storage/priority-icons/Medium.svg",
  },
  {
    id: 3,
    name: "მაღალი",
    icon: "https://momentum.redberryinternship.ge/storage/priority-icons/High.svg",
  },
];

export const departments = [
  {
    id: 1,
    name: "ადმინისტრაციის დეპარტამენტი",
  },
  {
    id: 2,
    name: "ადამიანური რესურსების დეპარტამენტი",
  },
  {
    id: 3,
    name: "ფინანსების დეპარტამენტი",
  },
  {
    id: 4,
    name: "გაყიდვები და მარკეტინგის დეპარტამენტი",
  },
  {
    id: 5,
    name: "ლოჯოსტიკის დეპარტამენტი",
  },
  {
    id: 6,
    name: "ტექნოლოგიების დეპარტამენტი",
  },
  {
    id: 7,
    name: "მედიის დეპარტამენტი",
  },
];

export const employees = [
  {
    id: 533,
    name: "ნიკა",
    surname: "ნოკია",
    avatar:
      "https://momentum.redberryinternship.ge/storage/employee-avatars/KPG9WGAB0NGkUIddJYPHRipM7InrAGPw6hY8WNhR.jpg",
    department: {
      id: 1,
      name: "ადმინისტრაციის დეპარტამენტი",
    },
  },
];

export const tasks = [
  {
    id: 507,
    name: "შექმენით readme ფაილი",
    description: "აღწერეთ შესრულებული დავალება რიდმი ფაილით",
    due_date: "2025-12-30T20:00:00.000000Z",
    department: {
      id: 2,
      name: "ადამიანური რესურსების დეპარტამენტი",
    },
    employee: {
      id: 1,
      name: "Carissa Luettgen",
      surname: "Moore",
      avatar:
        "https://momentum.redberryinternship.ge/storage/https://via.placeholder.com/640x480.png/00ff66?text=in",
      department: {
        id: 2,
        name: "ადამიანური რესურსების დეპარტამენტი",
      },
    },
    status: {
      id: 1,
      name: "დასაწყები",
    },
    priority: {
      id: 1,
      name: "დაბალი",
      icon: "https://momentum.redberryinternship.ge/storage/priority-icons/Low.svg",
    },
    total_comments: 0,
  },
];

"use client";
import React from "react";
import { Checkbox, CheckboxGroup, User, Chip, cn } from "@heroui/react";

// Better Type for user
interface UserInfo {
  name: string;
  avatar: string;
  username: string;
  role: string;
  status: string;
}

interface CustomCheckboxProps {
  user: UserInfo;
  statusColor:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  value: string;
}

export const CustomCheckbox = ({
  user,
  statusColor,
  value,
}: CustomCheckboxProps) => {
  return (
    <Checkbox
      aria-label={user.name}
      classNames={{
        base: cn(
          "inline-flex w-full bg-content1 m-0",
          "hover:bg-content2 items-center justify-between",
          "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary"
        ),
        label: "w-full",
      }}
      value={value}
    >
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <User
          avatarProps={{ size: "md", src: user.avatar }}
          description={`@${user.username}`}
          name={user.name}
        />
        <div className="flex flex-col sm:items-end items-start gap-1 mt-2 sm:mt-0">
          <span className="text-tiny text-default-500">{user.role}</span>
          <Chip color={statusColor} size="sm" variant="flat">
            {user.status}
          </Chip>
        </div>
      </div>
    </Checkbox>
  );
};

interface SelectMentorProps {
  onSelect: (mentor: string) => void;
}

export default function SelectMentor({ onSelect }: SelectMentorProps) {
  const [groupSelected, setGroupSelected] = React.useState<string[]>([]);

  // Allow only one selection
  const handleChange = (val: string[]) => {
    if (val.length === 0) {
      setGroupSelected([]);
      onSelect(""); // FIXED: must send empty string
    } else {
      const last = val[val.length - 1];
      setGroupSelected([last]);
      onSelect(last); // mentor NAME passed
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full max-w-lg mx-auto p-2 sm:p-0">
      <CheckboxGroup
        classNames={{ base: "w-full" }}
        label="Select Consultant"
        value={groupSelected}
        onChange={handleChange}
      >
        {/* Rabeya */}
        <CustomCheckbox
          statusColor="success"
          user={{
            name: "Rabeya",
            avatar: "rabeya.jpg",
            username: "rabeya",
            role: "Web Developer & Consultant",
            status: "Available",
          }}
          value="rabeya"
        />

        {/* Shatadhru */}
        <CustomCheckbox
          statusColor="primary"
          user={{
            name: "Shatadhru",
            avatar: "/shatadhru.png",
            username: "shatadhru",
            role: "Web Developer & Consultant",
            status: "Available",
          }}
          value="shatadhru"
        />

        {/* Amith */}
        <CustomCheckbox
          statusColor="warning"
          user={{
            name: "Amith",
            avatar: "/amit.png",
            username: "amith",
            role: "PHP & Laravel Backend Expert + Consultant",
            status: "Available",
          }}
          value="amith"
        />
      </CheckboxGroup>

      {groupSelected.length > 0 && (
        <p className="mt-2 text-sm text-gray-600">
          Selected: {groupSelected[0]}
        </p>
      )}
    </div>
  );
}

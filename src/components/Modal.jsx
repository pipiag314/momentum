import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { bytesToKB } from "../utils";
import { createNewEmployee } from "../API/createNewEmployee";
import { useDepartmentsStore } from "../store/store";

import close_icon from "/src/assets/close-icon.svg";
import file_icon from "/src/assets/file-icon.svg";

const Modal = ({ toggleModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState("");

  const departments = useDepartmentsStore(state => state.departments);
  
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectURL = URL.createObjectURL(selectedFile);
    setPreview(objectURL);

    return () => {
      URL.revokeObjectURL(objectURL);
    };
  }, [selectedFile]);

  const onChangeImage = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  const submitForm = async (data) => {
    try {
      await createNewEmployee(data.name, data.lastname, selectedFile, data.department);
    } catch (error) {
      console.log(error);
    } finally {
      toggleModal();
    }
  };

  return (
    <div>
      <div
        onClick={toggleModal}
        className="absolute w-[100vw] h-[200vh] z-[10] top-0 right-0 left-0 bottom-0 bg-[#0D0F1026] backdrop-blur-[10px]"></div>
      <div className="bg-white px-[50px] z-[100] pt-[40px] pb-[60px] absolute top-[20px] left-[50%] translate-x-[-50%] flex flex-col gap-[37px]">
        <img
          onClick={toggleModal}
          className="w-[40px] h-[40px] cursor-pointer self-end"
          src={close_icon}
          alt="close icon"
        />
        <div>
          <h3 className="text-center">თანამშრომლის დამატება</h3>
          <form
            noValidate
            onSubmit={handleSubmit(submitForm)}
            className="flex flex-col gap-[25px] mt-[45px]">
            <div className="form-grid">
              <div className="input-box">
                <label className="input-title" htmlFor="name">
                  სახელი*
                </label>
                <input
                  {...register("name", {
                    required: { value: true, message: "სახელი აუცილებელია" },
                    minLength: { value: 2, message: "მინიმუმ 2 სიმბოლო" },
                    maxLength: { value: 255, message: "მაქსიმუმ 255 სიმბოლო" },
                    pattern: {
                      value: /^[ა-ჰa-zA-Z]+$/,
                      message: "მხოლოდ ქართული ან ლათინური ასოები",
                    },
                  })}
                  name="name"
                  autoComplete="given-name"
                  type="text"
                  id="name"
                />
                {errors.name && (
                  <div className="text-[#FA4D4D]">{errors.name.message}</div>
                )}
              </div>
              <div className="input-box">
                <label className="input-title" htmlFor="lastname">
                  გვარი*
                </label>
                <input
                  {...register("lastname", {
                    required: { value: true, message: "გვარი აუცილებელია" },
                    minLength: { value: 2, message: "მინიმუმ 2 სიმბოლო" },
                    maxLength: { value: 255, message: "მაქსიმუმ 255 სიმბოლო" },
                    pattern: {
                      value: /^[ა-ჰa-zA-Z]+$/,
                      message: "მხოლოდ ქართული ან ლათინური ასოები",
                    },
                  })}
                  name="lastname"
                  type="text"
                  id="lastname"
                />
                {errors.lastname && (
                  <div className="text-[#FA4D4D]">
                    {errors.lastname.message}
                  </div>
                )}
              </div>
              <div className="input-box">
                <label className="input-title" htmlFor="avatar">
                  ავატარი*
                </label>
                <div className="w-[100%] h-[100%] rounded-[6px] mt-[8px] border-1 border-[#CED4DA] border-dashed flex justify-center items-center">
                  <label
                    htmlFor="avatar"
                    className="cursor-pointer flex items-center justify-center">
                    {preview ? (
                      <div className="relative">
                        <img
                          src={preview}
                          className="w-[88px] h-[88px] rounded-full object-cover"
                          alt="image"
                        />
                        <div
                          onClick={() => setSelectedFile(undefined)}
                          className="absolute bottom-1 right-1 bg-white rounded-full border-[0.3px] border-[#6C757D] hover:border-[red] p-[5px]">
                          <img
                            src="/src/assets/trash-icon.svg"
                            className=""
                            alt="trash icon"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <img
                          src={file_icon}
                          className="w-[24px] h-[24px]"
                          alt="file icon"
                        />
                        <span>ატვირთე ფოტო</span>
                      </div>
                    )}
                  </label>
                  <input
                    {...register("avatar", {
                      required: { value: true, message: "ავატარი აუცილებელია" },
                      validate: () => {
                        if (bytesToKB(selectedFile.size) > 600) {
                          return (
                            "სურათის ზომა უნდა იყოს 600KB ნაკლები, შერჩეული სურათის ზომაა: " +
                            bytesToKB(selectedFile.size) +
                            "KB"
                          );
                        }
                        return true;
                      },
                    })}
                    name="avatar"
                    className="m-[0] hidden"
                    placeholder="ატვირთე ფოტო"
                    accept="image/*"
                    type="file"
                    id="avatar"
                    onChange={(e) => onChangeImage(e)}
                  />
                </div>
                {errors.avatar && (
                  <div className="text-[#FA4D4D]">{errors.avatar.message}</div>
                )}
              </div>
              <div className="input-box">
                <label className="input-title" htmlFor="department">
                  დეპარტამენტი*
                </label>
                <select className="mt-[3px] border-1 border-[#CED4DA] rounded-[6px] px-[10px] py-[14px] outline-none" {...register("department", {
                  required: {value: true, message: "დეპარტამენტი აუცილებელია"}
                })} >
                  <option>--- აირჩიე დეპარტამენტი ---</option>
                  {departments.map(department => (
                    <option key={department.id} value={department.id}>{department.name}</option>
                  ))}
                </select>
                {errors.department && (
                  <div className="text-[#FA4D4D]">
                    {errors.department.message}
                  </div>
                )}
              </div>
            </div>
            <div className="self-end">
              <button
                className="header-btn header-secondary-btn"
                onClick={toggleModal}>
                გაუქმება
              </button>
              <button
                type="submit"
                className="ml-[22px] header-btn header-primary-btn">
                დაამატე თანამშრომელი
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Modal;

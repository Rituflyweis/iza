import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Icon } from "@iconify/react";
import axiosInstance from "../../../../api/axios";
import { useAppDispatch } from "../../../../store/hooks";
import { showLoader, hideLoader } from "../../../../store/slices/loaderSlice";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  userId: Yup.string()
    .required("User ID is required")
    .min(3, "User ID must be at least 3 characters"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9+\-\s()]+$/, "Invalid phone number format"),
  assignRole: Yup.string().required("Role is required"),
  gender: Yup.string().required("Gender is required"),
  age: Yup.number()
    .required("Age is required")
    .min(1, "Age must be at least 1")
    .max(120, "Age must be less than 120"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  kycFile: Yup.mixed()
    .nullable()
    .test("fileSize", "File size must be less than 1MB", (value) => {
      if (!value) return true; // File is optional
      return value.size <= 1048576; // 1MB in bytes
    })
    .test("fileType", "File must be JPG, CSV, or Excel", (value) => {
      if (!value) return true; // File is optional
      const validTypes = [
        "image/jpeg",
        "image/jpg",
        "text/csv",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ];
      return validTypes.includes(value.type);
    }),
});

const CreateUserForm = () => {
  const dispatch = useAppDispatch();

  const initialValues = {
    name: "",
    userId: "",
    phoneNumber: "",
    assignRole: "Admin",
    gender: "Male",
    age: "",
    email: "",
    kycFile: null,
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      dispatch(showLoader("Creating user..."));
      
      // Create FormData for file upload
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("userId", values.userId);
      formData.append("phoneNumber", values.phoneNumber);
      formData.append("assignRole", values.assignRole);
      formData.append("gender", values.gender);
      formData.append("age", values.age);
      formData.append("email", values.email);
      if (values.kycFile) {
        formData.append("kycFile", values.kycFile);
      }

      // Call API using axios instance
      const response = await axiosInstance.post("/users", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Reset form on success
      resetForm();
      
      // You can add a success notification here
      console.log("User created successfully:", response.data);
    } catch (error) {
      console.error("Error creating user:", error);
      // You can add error notification here
      alert(error.response?.data?.message || "Failed to create user");
    } finally {
      dispatch(hideLoader());
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur, setFieldValue, isSubmitting }) => (
        <Form>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Profile Image */}
            <div className="flex justify-center md:justify-start">
              <div className="w-32 h-32 rounded-xl overflow-hidden border-2 border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces"
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Form Section */}
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field
                label="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && errors.name}
              />

              <Field
                label="User ID"
                name="userId"
                value={values.userId}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.userId && errors.userId}
              />

              <Field
                label="Phone Number"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phoneNumber && errors.phoneNumber}
              />

              <Field
                label="Assign Role"
                name="assignRole"
                component="select"
                value={values.assignRole}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.assignRole && errors.assignRole}
              >
                <option value="Admin">Admin</option>
                <option value="Order Manager">Order Manager</option>
                <option value="Support Staff">Support Staff</option>
                <option value="Inventory Manager">Inventory Manager</option>
              </Field>

              <Field
                label="Gender"
                name="gender"
                component="select"
                value={values.gender}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.gender && errors.gender}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Field>

              <Field
                label="Age"
                name="age"
                type="number"
                value={values.age}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.age && errors.age}
              />

              {/* Full-width KYC Section */}
              <div className="md:col-span-2">
                <Field
                  label="KYC & Verification"
                  name="kycFile"
                  component="file"
                  file={values.kycFile}
                  onFileChange={(file) => setFieldValue("kycFile", file)}
                  error={touched.kycFile && errors.kycFile}
                />
              </div>

              {/* Full-width Email */}
              <div className="md:col-span-2">
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && errors.email}
                />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 flex justify-end gap-4 mt-4">
                <button
                  type="button"
                  className="px-6 py-2 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  {isSubmitting ? "Creating..." : "Create User"}
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

/* --- Reusable Field Component --- */
const Field = ({
  label,
  name,
  component = "input",
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  children,
  file,
  onFileChange,
  ...props
}) => {
  const handleFileChange = (e) => {
    if (e.target.files?.[0]) {
      onFileChange?.(e.target.files[0]);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files?.[0]) {
      onFileChange?.(e.dataTransfer.files[0]);
    }
  };

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-600 mb-1">
        {label}
      </label>
      {component === "select" ? (
        <>
          <select
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={`w-full border-2 rounded-lg py-2.5 px-3 text-sm focus:ring-pink-500 outline-none ${
              error ? "border-red-500" : "border-gray-200 focus:border-pink-500"
            }`}
            {...props}
          >
            {children}
          </select>
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </>
      ) : component === "file" ? (
        <>
          <DropZone
            id={`${name}-upload`}
            onDrop={handleDrop}
            onFile={handleFileChange}
            file={file}
          />
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </>
      ) : (
        <>
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={`w-full border-2 rounded-lg py-2.5 px-3 text-sm focus:ring-pink-500 outline-none ${
              error ? "border-red-500" : "border-gray-200 focus:border-pink-500"
            }`}
            {...props}
          />
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </>
      )}
    </div>
  );
};

const DropZone = ({ id, onDrop, onFile, file }) => (
  <div
    onDrop={onDrop}
    onDragOver={(e) => e.preventDefault()}
    className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center hover:border-pink-400 bg-white cursor-pointer transition"
  >
    <input id={id} type="file" className="hidden" onChange={onFile} />
    <label htmlFor={id} className="cursor-pointer flex flex-col items-center">
      <Icon
        icon="mdi:file-upload-outline"
        width={48}
        height={48}
        className="text-gray-400 mb-3"
      />
      <p className="text-sm text-gray-600">
        <span className="text-pink-600 underline">Click to upload</span> or drag
        and drop
      </p>
      <p className="text-xs text-gray-400">JPG, CSV, Excel less than 1MB</p>
      {file && (
        <p className="text-xs text-green-600 mt-2">Selected: {file.name}</p>
      )}
    </label>
  </div>
);

export default CreateUserForm;

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import InputError from "@/ui_components/InputError";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog, updateBlog } from "@/services/apiBlog";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import SmallSpinner from "@/ui_components/SmallSpinner";
import SmallSpinnerText from "@/ui_components/SmallSpinnerText";
import LoginPage from "./LoginPage";
import { FaTimes } from "react-icons/fa";

const CreatePostPage = ({ blog, isAuthenticated }) => {
  const { register, handleSubmit, formState, setValue, setError, clearErrors } = useForm({
    defaultValues: blog ? blog : {},
  });
  const { errors } = formState;
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const blogID = blog?.id;

  const handleClose = () => {
    navigate(-1);
  };

  const updateMutation = useMutation({
    mutationFn: ({ data, id }) => updateBlog(data, id),
    onSuccess: () => {
      navigate("/");
      toast.success("Your post has been updated successfully!");
      console.log("Your post has been updated successfully!");
    },

    onError: (err) => {
      toast.error(err.message);
      console.log("Error updating blog", err);
    },
  });

  const mutation = useMutation({
    mutationFn: (data) => createBlog(data),
    onSuccess: () => {
      toast.success("New post added successfully");
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      navigate("/");
    },
    onError: (err) => {
      toast.error(err.message);
      console.log("Error creating blog", err);
    },
  });

  function onSubmit(data) {
    if (!data.category) {
      setError("category", { message: "Blog's category is required" });
      return;
    }
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("category", data.category);

    if (data.featured_image && data.featured_image[0]) {
      if (data.featured_image[0] != "/") {
        formData.append("featured_image", data.featured_image[0]);
      }
    }
    if (blog && blogID) {
      updateMutation.mutate({ data: formData, id: blogID });
    } else {
      mutation.mutate(formData);
    }
  }

  if (isAuthenticated === false) {
    return <LoginPage />;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${
        blog && "h-[90%] overflow-auto"
      } relative md:px-16 px-8 py-6 flex flex-col mx-auto my-9 items-center gap-6 w-fit rounded-lg bg-[#FFFFFF] shadow-xl dark:text-white dark:bg-[#141624]`}
    >
      <button
        type="button"
        onClick={handleClose}
        className="absolute top-4 right-4 text-[#3B3C4A] dark:text-[#97989F] hover:text-[#141624] dark:hover:text-[#FFFFFF] text-2xl bg-none border-none p-0 cursor-pointer transition-colors"
      >
        <FaTimes />
      </button>

      <div className="flex flex-col gap-2 justify-center items-center mb-2">
        <h3 className="font-semibold text-2xl max-sm:text-xl">
          {blog ? "Обновить пост" : "Создать пост"}
        </h3>

        <p className="max-sm:text-[14px]">
          {blog
            ? "Хотите обновить свой пост?"
            : "Создайте новый пост и поделитесь идеями."}
        </p>
      </div>

      <div>
        <Label htmlFor="title" className="dark:text-[97989F]">
          Заголовок
        </Label>
        <Input
          type="text"
          id="title"
          {...register("title", {
            required: "Blog's title is required",
            minLength: {
              value: 3,
              message: "The title must be at least 3 characters",
            },
          })}
          placeholder="Введите наименование"
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[400px] max-sm:w-[300px] max-sm:text-[14px]"
        />

        {errors?.title?.message && <InputError error={errors.title.message} />}
      </div>

      <div>
        <Label htmlFor="content">Содержание</Label>
        <Textarea
          id="content"
          placeholder="Напишите текст"
          {...register("content", {
            required: "Blog's content is required",
            minLength: {
              value: 10,
              message: "The content must be at least 10 characters",
            },
          })}
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[180px]  w-[400px] text-justify max-sm:w-[300px] max-sm:text-[14px]"
        />
        {errors?.content?.message && (
          <InputError error={errors.content.message} />
        )}
      </div>

      <div className="w-full">
        <Label htmlFor="category">Категория</Label>

        <Select
          onValueChange={(value) => {
            setValue("category", value);
            clearErrors("category");
          }}
          defaultValue={blog ? blog.category : ""}
        >
          <SelectTrigger className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-full max-sm:w-[300px] max-sm:text-[14px]">
            <SelectValue placeholder="Выберите категорию" />
          </SelectTrigger>
          <SelectContent position="popper" sideOffset={4} avoidCollisions={false}>
            <SelectGroup>
              <SelectLabel>Категории</SelectLabel>
              <SelectItem value="Frontend">Frontend</SelectItem>
              <SelectItem value="Backend">Backend</SelectItem>
              <SelectItem value="Fullstack">Fullstack</SelectItem>
              <SelectItem value="Design">Design</SelectItem>
              <SelectItem value="Blockchain">Blockchain</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {errors?.category?.message && (
          <InputError error={errors.category.message} />
        )}
      </div>

      <div className="w-full">
        <Label htmlFor="featured_image">Изображение</Label>
        <Input
          type="file"
          id="picture"
          {...register("featured_image", {
            required: blog ? false : "Blog's featured image is required",
          })}
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-full max-sm:w-[300px] max-sm:text-[14px]"
        />

        {errors?.featured_image?.message && (
          <InputError error={errors.featured_image.message} />
        )}
      </div>

      <div className="w-full flex items-center justify-center flex-col my-4">
        {blog ? (
          <button
            disabled={updateMutation.isPending}
            className="bg-[#4B6BFB] text-white w-full py-3 px-2 rounded-md flex items-center justify-center gap-2"
          >
            {updateMutation.isPending ? (
              <>
                {" "}
                <SmallSpinner /> <SmallSpinnerText text="Обновление..." />{" "}
              </>
            ) : (
              <SmallSpinnerText text="Обновить пост" />
            )}
          </button>
        ) : (
          <button
            disabled={mutation.isPending}
            className="bg-[#4B6BFB] text-white w-full py-3 px-2 rounded-md flex items-center justify-center gap-2"
          >
            {mutation.isPending ? (
              <>
                {" "}
                <SmallSpinner /> <SmallSpinnerText text="Создание..." />{" "}
              </>
            ) : (
              <SmallSpinnerText text="Опубликовать" />
            )}
          </button>
        )}
      </div>
    </form>
  );
};

export default CreatePostPage;

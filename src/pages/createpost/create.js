import React from "react";
import {
    useNavigation,
    IResourceComponentsProps,
    useTranslate,
    useSelect,
} from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";

export const CreatePostCreate = () => {
    const translate = useTranslate();

    const { list } = useNavigation();

    const {
        refineCore: { onFinish, formLoading },
        register,
        handleSubmit,
        resetField,
        formState: { errors },
    } = useForm();

    const { options: categoryOptions } = useSelect({
        resource: "categories",
    });

    return (
        <div style={{ padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h1>Create Recipe Post</h1>
                <div>
                    <button
                        onClick={() => {
                            list("post");
                        }}
                    >
                        {translate("See your posts")}
                    </button>
                </div>
            </div>
            <form onSubmit={handleSubmit(onFinish)}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                    }}
                >
                    <label>
                        <span style={{ marginRight: "8px" }}>
                            {translate("Recipe Name")}
                        </span>
                        <input
                            type="text"
                            {...register("title", {
                                required: "This field is required",
                            })}
                        />
                        <span style={{ color: "red" }}>
                            {errors.title && errors.title.message}
                        </span>
                    </label>
                    <label>
                        <span style={{ marginRight: "8px" }}>
                            {translate("Description")}
                        </span>
                        <textarea
                            rows={5}
                            cols={33}
                            style={{ verticalAlign: "top" }}
                            {...register("content", {
                                required: "This field is required",
                            })}
                        />
                        <span style={{ color: "red" }}>
                            {errors.content && errors.content.message}
                        </span>
                    </label>
                    <label>
                        <span style={{ marginRight: "8px" }}>
                            {translate("Ingredients")}
                        </span>
                        <textarea
                            rows={5}
                            cols={33}
                            style={{ verticalAlign: "top" }}
                            {...register("ingredients", {
                                required: "This field is required",
                            })}
                        />
                        <span style={{ color: "red" }}>
                            {errors.ingredients && errors.ingredients.message}
                        </span>
                    </label>
                    <label>
                        <span style={{ marginRight: "8px" }}>
                            {translate("Directions")}
                        </span>
                        <textarea
                            rows={5}
                            cols={33}
                            style={{ verticalAlign: "top" }}
                            {...register("directions", {
                                required: "This field is required",
                            })}
                        />
                        <span style={{ color: "red" }}>
                            {errors.directions && errors.directions.message}
                        </span>
                    </label>
                    <div>
                        <input
                            type="submit"
                            value={translate("Save Post")}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

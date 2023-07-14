import React from "react";
import { useNavigation } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";

export const CreatePostEdit = () => {
    const { list } = useNavigation();

    const {
        refineCore: { onFinish, formLoading, queryResult },
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const createpostData = queryResult?.data?.data;

    return (
        <div style={{ padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h1>Edit Post</h1>
                <div>
                    <button
                        onClick={() => {
                            list("createpost");
                        }}
                    >
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
                        <span style={{ marginRight: "8px" }}>Id</span>
                        <input
                            disabled
                            type="number"
                            {...register("id", {
                                required: "This field is required",
                                valueAsNumber: true,
                            })}
                        />
                        <span style={{ color: "red" }}>
                            {(errors)?.id?.message}
                        </span>
                    </label>
                    <label>
                        <span style={{ marginRight: "8px" }}>Recipe Name</span>
                        <input
                            type="text"
                            {...register("title", {
                                required: "This field is required",
                            })}
                        />
                        <span style={{ color: "red" }}>
                            {(errors)?.title?.message}
                        </span>
                    </label>
                    <label>
                        <span style={{ marginRight: "8px" }}>Description</span>
                        <input
                            type="text"
                            {...register("description", {
                                required: "This field is required",
                            })}
                        />
                        <span style={{ color: "red" }}>
                            {(errors)?.description?.message}
                        </span>
                    </label>
                    <label>
                        <span style={{ marginRight: "8px" }}>Ingredients</span>
                        <input
                            type="text"
                            {...register("ingredients", {
                                required: "This field is required",
                            })}
                        />
                        <span style={{ color: "red" }}>
                            {(errors)?.ingredients?.message}
                        </span>
                    </label>
                    <label>
                        <span style={{ marginRight: "8px" }}>Directions</span>
                        <input
                            type="text"
                            {...register("directions", {
                                required: "This field is required",
                            })}
                        />
                        <span style={{ color: "red" }}>
                            {(errors)?.directions?.message}
                        </span>
                    </label>
                    <div>
                        <input type="submit" value="Save" />
                    </div>
                </div>
            </form>
        </div>
    );
};

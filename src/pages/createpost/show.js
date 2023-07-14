import React from "react";
import {
  useShow,
  useResource,
  useNavigation,
} from "@refinedev/core";

export const CreatePostShow = () => {
  const { edit, list } = useNavigation();
  const { id } = useResource();
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <div style={{ padding: "16px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1>Foodstuff Show</h1>
        <div style={{ display: "flex", gap: "8px" }}>
          <button onClick={() => list("createpost")}>createpost</button>
          <button onClick={() => edit("createpost", id ?? "")}>Edit</button>
        </div>
      </div>
      <div>
        <div style={{ marginTop: "6px" }}>
          <h5>Id</h5>
          <div>{record?.id ?? ""}</div>
        </div>
        <div style={{ marginTop: "6px" }}>
          <h5>Name</h5>
          <div>{record?.name}</div>
        </div>
        <div style={{ marginTop: "6px" }}>
          <h5>Category</h5>
          <div>{record?.category}</div>
        </div>
      </div>
    </div>
  );
};

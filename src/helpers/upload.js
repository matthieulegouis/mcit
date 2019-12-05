const BACKEND_URL =
  process.env.NODE_ENV === "development" ? "http://localhost:4000" : "";

export const uploadImage = async (name, mime, blobImage) => {
  const request = {
    method: "POST",
    body: new FormData()
  };

  request.body.append("name", name);
  request.body.append("mime", mime);
  request.body.append("image", blobImage);
  try {
    const response = await fetch(BACKEND_URL + "/image", request);
    const { url } = await response.json();
    if (url) return url;
    else throw Error("Can't use image uploader");
  } catch (error) {
    console.error(error);
    return "";
  }
};

export const uploadPDFContent = async imgData => {
  const request = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imgData })
  };

  try {
    const response = await fetch(BACKEND_URL + "/pdf", request);
    const { url } = await response.json();
    if (url) return url;
    else throw Error("Can't use pdf generator");
  } catch (error) {
    console.error(error);
    return "";
  }
};

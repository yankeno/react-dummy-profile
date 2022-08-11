import React from "react";

const getProfile = async () => {
  const url = "https://randomuser.me/api/?results=100";
  const response = await fetch(url, { mtthod: "get" });
  const json = response.json();
  if (response.status === 200) {
    return Promise.resolve(json);
  } else {
    return Promise.reject(json.error);
  }
};

const Profile = () => {
  getProfile()
    .then((results) => {
      results.forEach((result) => {});
    })
    .catch((err) => {
      alert(`データの読み込みに失敗しました。<br />
        error: ${err}`);
    });
  return (
    <div className="ContentCard p-4">
      <div class="max-w-sm rounded overflow-hidden shadow-lg text-center">
        <img
          class="w-full"
          src="https://source.unsplash.com/random/1600x900/"
          alt="Sunset in the mountains"
        ></img>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">山本　太郎</div>
          <p class="text-gray-700 text-base">元俳優、政治家</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

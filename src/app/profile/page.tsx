import Container from "@/components/Container";
import ProfileInfo from "@/components/ProfileInfo";
import React from "react";

const page = () => {
  return (
    <Container>
      <p className="text-xl font-semibold pb-10 underline underline-offset-4 decoration-[1px]">
        Profile Information
      </p>
      <ProfileInfo />
    </Container>
  );
};

export default page;

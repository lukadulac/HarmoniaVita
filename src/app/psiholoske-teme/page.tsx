"use client";
import { useState } from "react";
import Image from "next/image";
import BlogPage from "@/components/BlogPage";

const PsiholoskeTeme = () => {
	return (
		<section className="min-h-screen pt-[120px] sm:pt-[100px] lg:pt-[120px] py-6 sm:py-8 lg:py-12 px-4 bg-gradient-to-br from-hv-green/40 to-hv-beige-6">
			<BlogPage />
		</section>
	);
};
export default PsiholoskeTeme;

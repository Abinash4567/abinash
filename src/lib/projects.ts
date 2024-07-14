import { data } from "@/app/types";
import billopsImage from "../../public/billops_logo.png";
import recallImage from "../../public/recallImage.png"
import typeSwiftImage from "../../public/typeswiftImage.png"

export const projects: Array<data> = [
    {
        name: "billops",
        url: "https://github.com/Abinash4567/billops",
        techStack: "Next.js, Typescript, Prisma, Shadcn, NextAuth, Postgresql",
        description: "billops is a subscription management platform for businesses. It helps businesses manage their subscription models, billing, and user data. Billops offers a dashboard with analytics like revenue, subscribers, and retention rate. Businesses can also manage their subscriptions, coupons, and user details. Billops provides a secure API for organizations to access their data and webhooks to capture payments.",
        image: billopsImage,
        web: "https://billops.vercel.app/"
    },

    {
        name: "recall",
        url: "https://github.com/Abinash4567/recall",
        techStack: "Next.js, Typescript, Prisma, Shadcn, NextAuth, Postgresql, Cloudinary, Chrome API",
        description: "Web app helps people with Alzheimer's disease remember loved ones and cherish memories using custom Twitter posts as memory prompts. Family and friends can curate a feed of images and posts to jog the user's memory. Cloudinary storage ensures easy data management and the system allows for personalized control over the frequency of prompts. A website preview lets users see how their custom posts will appear in the feed.",
        image: recallImage,
        web: "https://recall-smoky.vercel.app/"
    },

    {
        name: "typeSwift",
        url: "https://github.com/Abinash4567/type_swift",
        techStack: "Next.js, Typescript, Shadcn, recharts",
        description: "The app improves typing skills by tracking WPM and accuracy in real-time, helping you monitor progress and identify areas for improvement. It offers auto-generated texts of varying difficulty and custom text options for personalized practice. Customizable timers and exercises with punctuation and numbers ensure comprehensive training. Insightful graphs analyze your accuracy and speed during each session.",
        image: typeSwiftImage,
        web: "https://type-swift-tm5m.vercel.app/"
    }
]
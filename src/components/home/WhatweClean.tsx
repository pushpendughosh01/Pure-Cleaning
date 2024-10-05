"use client";
import React from "react";
import initTranslations from "@/app/i18n";
import { useParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

interface Translations {
  t: (key: string) => string; // Adjust this as needed based on your translation structure
}

const WhatweClean = () => {
  const [direction, setDirection] = useState<string>("text-left");
  const [t, setTranslations] = useState<Translations | null>(null);
  const locale = useParams<{ locale: string }>();
  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const translations = await initTranslations(locale.locale, ["Home2"]);
        setTranslations(translations);

        if (locale.locale === "en") {
          setDirection("text-left");
        } else if (locale.locale == "ar-AE") {
          setDirection("text-right");
        }
      } catch (error) {
        console.error("Failed to load translations:", error);
      }
    };

    if (locale) {
      fetchTranslations();
    }
  }, [locale]);

  if (!t) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      {t.t && (
        <div className="">
          {/* Card Blog */}
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-2 lg:py-14 mx-auto">
            {/* Title */}
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
              <h2 className="text-2xl font-bold md:text-4xl md:leading-tight mt-20 text-black">
                {t.t("header1")}
              </h2>
              <p className="py-4 text-gray-600 text-sm dark:text-neutral-400">
                {t.t("header2")}
              </p>
            </div>
            {/* End Title */}

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card */}
              <div className="group flex flex-col h-full border border-gray-300 hover:border-gray-300 hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl py-5 px-4 md:px-5    dark:focus:border-transparent ">
                <div className="aspect-w-16 aspect-h-11">
                  <img
                    className="w-full object-cover rounded-xl"
                    src="/car-wash-2.jpg"
                    alt="Blog Image"
                  />
                </div>
                <div className="my-6">
                  <h3
                    className={` ${direction} text-xl font-semibold text-gray-800 `}
                  >
                    {t.t("car")}
                  </h3>
                  <p
                    className={`${direction} mt-5 text-gray-600 dark:text-neutral-400`}
                  >
                    {t.t("car2")}
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-x-3">
                  <img
                    className="size-8 rounded-full"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Avatar"
                  />
                  <div>
                    <h5 className={`${direction} text-sm text-gray-800  `}>
                      Pure Cleaning Services
                    </h5>
                  </div>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="group flex flex-col h-full border border-gray-300 hover:border-gray-300 hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl py-5 px-4 md:px-5    dark:focus:border-transparent ">
                <div className="aspect-w-16 aspect-h-11">
                  <img
                    className="w-full object-cover rounded-xl"
                    src="/spring.svg"
                    alt="Blog Image"
                  />
                </div>
                <div className="my-6">
                  <h3
                    className={` ${direction} text-xl font-semibold text-gray-800 `}
                  >
                    {t.t("general")}
                  </h3>
                  <p
                    className={` ${direction} mt-5 text-gray-600 dark:text-neutral-400`}
                  >
                    {t.t("general2")}
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-x-3">
                  <img
                    className="size-8 rounded-full"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Avatar"
                  />
                  <div>
                    <h5 className={` ${direction} text-sm text-gray-800  `}>
                      Pure Cleaning Services
                    </h5>
                  </div>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="group flex flex-col h-full border border-gray-300 hover:border-gray-300 hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl py-5 px-4 md:px-5    dark:focus:border-transparent ">
                <div className="aspect-w-16 aspect-h-11">
                  <img
                    className="w-full object-cover rounded-xl"
                    src="/bed.jpg"
                    alt="Blog Image"
                  />
                </div>
                <div className="my-6">
                  <h3
                    className={` ${direction} text-xl font-semibold text-gray-800 `}
                  >
                    {t.t("bed")}
                  </h3>
                  <p
                    className={` ${direction} mt-5 text-gray-600 dark:text-neutral-400`}
                  >
                    {t.t("bed2")}
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-x-3">
                  <img
                    className="size-8 rounded-full"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Avatar"
                  />
                  <div>
                    <h5 className={` ${direction} text-sm text-gray-800  `}>
                      Pure Cleaning Services
                    </h5>
                  </div>
                </div>
              </div>
              {/* End Card */}
            </div>

            <br />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card */}
              <div className="group flex flex-col h-full border border-gray-300 hover:border-gray-300 hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl py-5 px-4 md:px-5    dark:focus:border-transparent ">
                <div className="aspect-w-16 aspect-h-11">
                  <img
                    className="w-full object-cover rounded-xl"
                    src="/sanitization.jpg"
                    alt="Blog Image"
                  />
                </div>
                <div className="my-6">
                  <h3
                    className={` ${direction} text-xl font-semibold text-gray-800 `}
                  >
                    {t.t("sanitize")}
                  </h3>
                  <p
                    className={` ${direction} mt-5 text-gray-600 dark:text-neutral-400`}
                  >
                    {t.t("sanitize2")}
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-x-3">
                  <img
                    className="size-8 rounded-full"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Avatar"
                  />
                  <div>
                    <h5 className={` ${direction} text-sm text-gray-800  `}>
                      Pure Cleaning Services
                    </h5>
                  </div>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="group flex flex-col h-full border border-gray-300 hover:border-gray-300 hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl py-5 px-4 md:px-5    dark:focus:border-transparent ">
                <div className="aspect-w-16 aspect-h-11">
                  <img
                    className="w-full object-cover rounded-xl"
                    src="/sofa.jpg"
                    alt="Blog Image"
                  />
                </div>
                <div className="my-6">
                  <h3
                    className={` ${direction} text-xl font-semibold text-gray-800 `}
                  >
                    {t.t("sofa")}
                  </h3>
                  <p
                    className={` ${direction} mt-5 text-gray-600 dark:text-neutral-400`}
                  >
                    {t.t("sofa2")}
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-x-3">
                  <img
                    className="size-8 rounded-full"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Avatar"
                  />
                  <div>
                    <h5 className={` ${direction} text-sm text-gray-800  `}>
                      Pure Cleaning Services
                    </h5>
                  </div>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="group flex flex-col h-full border border-gray-300 hover:border-gray-300 hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl py-5 px-4 md:px-5    dark:focus:border-transparent ">
                <div className="aspect-w-16 aspect-h-11">
                  <img
                    className="w-full object-cover rounded-xl"
                    src="/floor.png"
                    alt="Blog Image"
                  />
                </div>
                <div className="my-6">
                  <h3
                    className={` ${direction} text-xl font-semibold text-gray-800 `}
                  >
                    {t.t("Floor")}
                  </h3>
                  <p
                    className={` ${direction} mt-5 text-gray-600 dark:text-neutral-400`}
                  >
                    {t.t("Floor2")}
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-x-3">
                  <img
                    className="size-8 rounded-full"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Avatar"
                  />
                  <div>
                    <h5 className={` ${direction} text-sm text-gray-800  `}>
                      Pure Cleaning Services
                    </h5>
                  </div>
                </div>
              </div>
              {/* End Card */}
            </div>
            {/* End Grid */}
            {/* Card */}
            <div className="mt-12 text-center">
              <a
                className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border  bg-black text-white shadow-sm hover:bg-gray-700 focus:outline-none    "
                href="/service"
              >
                {t.t("More")}
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
            {/* End Card */}
          </div>
          {/* End Card Blog */}
        </div>
      )}
    </Fragment>
  );
};

export default WhatweClean;

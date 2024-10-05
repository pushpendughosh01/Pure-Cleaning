"use client";
import React from "react";
import initTranslations from "@/app/i18n";
import { useParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

interface Translations {
  t: (key: string) => string; // Adjust this as needed based on your translation structure
}

const Feature = () => {
  const [direction, setDirection] = useState<string>("text-left");
  const [t, setTranslations] = useState<Translations | null>(null);
  const locale = useParams<{ locale: string }>();
  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const translations = await initTranslations(locale.locale, ["Home3"]);
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
     {t.t && (<div className="max-w-[85rem] mt-4 px-4 py-15 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div>
            <img
              className="rounded-xl"
              src="/feature.jpeg"
              alt="Features Image"
            />
          </div>
          {/* End Col */}
          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              {/* Title */}
              <div className="space-y-2 md:space-y-4">
                <h2 className={`font-bold text-3xl lg:text-4xl text-gray-800 ${direction} `}>
                  {t.t("header")}
                </h2>
                <p className={`text-gray-500 ${direction}`}>
                {t.t("header2")}
                </p>
              </div>
              {/* End Title */}
              {/* List */}
              <ul className="space-y-2 sm:space-y-4">
                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-gray-900 text-gray-100 ">
                    <svg
                      className="shrink-0 size-3.5"
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                      <span className="font-bold">{t.t("quick")} </span>{" "}
                      {t.t("Cleaning")}
                    </span>
                  </div>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-gray-900 text-gray-100 ">
                    <svg
                      className="shrink-0 size-3.5"
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                    {t.t("Ad")}{" "}
                      <span className="font-bold">{t.t("Techniques")}</span>
                    </span>
                  </div>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-gray-900 text-gray-100 ">
                    <svg
                      className="shrink-0 size-3.5"
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                    {t.t("Exceptional")}
                    </span>
                  </div>
                </li>
              </ul>
              {/* End List */}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>)}
      

    </Fragment>
  );
};

export default Feature;

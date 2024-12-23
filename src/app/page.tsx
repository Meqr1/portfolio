"use client";

import { Divider, Image, CardFooter, Card, Button } from "@nextui-org/react";

export default function Page() {
    return (
        <>
            <div className="flex flex-col items-center w-full mt-10 cursor-default dotgrid select-none">
                <div className="dotgrid-content text-2xl purple-fade relative">
                    <div className="w-full p-4 mt-[50px]">
                        <div className="w-3/4">
                            <span className="text-9xl font-semibold text-zinc-600">
                                Hello!{" "}
                            </span>
                            I am{" "}
                            <span className="text-7xl font-light hover:text-zinc-300 transition-all duration-300 delay-100">
                                Meqr
                            </span>{" "}
                            also know as{" "}
                            <span className="text-7xl font-light hover:text-zinc-300 transition-all duration-300 delay-100">
                                Ayan Mahajan
                            </span>
                        </div>
                        <div className="flex flex-col mt-[150px] text-right">
                            <span className="text-9xl font-semibold text-zinc-500">
                                I am
                            </span>{" "}
                            <p>
                                <span className="text-4xl">Artist</span>
                                <br /><span className="text-6xl">Full-Stack developer</span>
                                <br />
                                <br /><span className="text-5xl">Low End developer</span>
                            </p>
                        </div>
                        <br />
                        <br />
                        <div className="sm:p-4 p-1 sm:m-5 m-2 mt-[100px]" id="techstack">
                            <h1 className="text-6xl text-zinc-300 mb-4 mt-4">Tech Stack</h1>
                            <Divider />

                            <div className="flex w-full justify-between mt-[50px]">
                                Full-Stack
                                <div className="grid gap-2 grid-flow-col w-[50%] h-full">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
                                            <path fill="currentColor" d="M0 0h32v32H0zm29.38 24.37c-.234-1.464-1.188-2.688-4.005-3.833c-.979-.458-2.073-.781-2.396-1.521c-.12-.438-.141-.677-.063-.938c.203-.865 1.219-1.12 2.021-.88c.521.161 1 .557 1.302 1.198c1.38-.901 1.38-.901 2.339-1.5c-.359-.557-.536-.802-.781-1.036c-.839-.943-1.958-1.422-3.776-1.38l-.943.12c-.901.219-1.76.698-2.281 1.339c-1.516 1.719-1.078 4.719.76 5.964c1.818 1.359 4.479 1.656 4.823 2.938c.318 1.563-1.161 2.063-2.625 1.88c-1.078-.24-1.677-.781-2.339-1.781l-2.438 1.401c.276.641.599.917 1.078 1.479c2.318 2.339 8.12 2.219 9.161-1.339c.036-.12.318-.943.099-2.198zm-11.979-9.662h-2.995c0 2.583-.016 5.151-.016 7.74c0 1.641.083 3.151-.182 3.615c-.443.917-1.573.802-2.089.641c-.526-.26-.797-.62-1.104-1.141c-.089-.141-.151-.26-.172-.26l-2.432 1.5c.406.839 1 1.563 1.766 2.021c1.141.682 2.672.901 4.276.542c1.042-.302 1.943-.922 2.411-1.88c.682-1.24.536-2.76.531-4.464c.016-2.74 0-5.479 0-8.24z"></path>
                                        </svg>
                                    </span>
                                    <span>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                            <g fill="none">
                                                <g clipPath="url(#akarIconsTypescriptFill0)">
                                                    <path fill="currentColor" d="M23.429 0H.57A.57.57 0 0 0 0 .571V23.43a.57.57 0 0 0 .571.571H23.43a.57.57 0 0 0 .571-.571V.57a.57.57 0 0 0-.572-.57m-9.143 12.826h-2.857v8.888H9.143v-8.888H6.286v-1.969h8zm.64 8.38v-2.375s1.298.978 2.855.978s1.497-1.018 1.497-1.158c0-1.477-4.412-1.477-4.412-4.751c0-4.452 6.429-2.695 6.429-2.695l-.08 2.116s-1.078-.719-2.296-.719s-1.657.58-1.657 1.198c0 1.597 4.452 1.438 4.452 4.652c0 4.95-6.788 2.755-6.788 2.755"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="akarIconsTypescriptFill0">
                                                        <path fill="#fff" d="M0 0h24v24H0z"></path>
                                                    </clipPath>
                                                </defs>
                                            </g>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
                                            <path fill="currentColor" d="M16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854s2.854-1.281 2.854-2.854s-1.281-2.854-2.854-2.854m-7.99 8.526l-.63-.156C2.692 20.328 0 18.318 0 15.995s2.693-4.333 7.38-5.521l.63-.156l.177.625a31.4 31.4 0 0 0 1.818 4.771l.135.281l-.135.286a31 31 0 0 0-1.818 4.771zm-.921-9.74c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063a33 33 0 0 1 1.578-4.063a33 33 0 0 1-1.578-4.063m16.901 9.74l-.177-.625a31 31 0 0 0-1.818-4.766l-.135-.286l.135-.286a31 31 0 0 0 1.818-4.771l.177-.62l.63.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zm-.657-5.677a32.5 32.5 0 0 1 1.578 4.063c3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063a34 34 0 0 1-1.578 4.063M7.078 11.927l-.177-.625C5.583 6.656 5.984 3.323 8 2.161c1.979-1.141 5.151.208 8.479 3.625l.453.464l-.453.464a31.5 31.5 0 0 0-3.229 3.958l-.182.255l-.313.026a31.6 31.6 0 0 0-5.047.813zm2.531-8.838c-.359 0-.677.073-.943.229c-1.323.766-1.557 3.422-.646 7.005a33 33 0 0 1 4.313-.672a33 33 0 0 1 2.734-3.391c-2.078-2.026-4.047-3.172-5.458-3.172zm12.787 27.145q-.008 0 0 0c-1.901 0-4.344-1.427-6.875-4.031l-.453-.464l.453-.464a31.5 31.5 0 0 0 3.229-3.958l.177-.255l.313-.031a30.7 30.7 0 0 0 5.052-.813l.63-.156l.177.625c1.318 4.646.917 7.974-1.099 9.135a3.1 3.1 0 0 1-1.604.411zm-5.464-4.505c2.078 2.026 4.047 3.172 5.458 3.172h.005c.354 0 .672-.078.938-.229c1.323-.766 1.563-3.422.646-7.005a33 33 0 0 1-4.313.667a33 33 0 0 1-2.734 3.396zm7.99-13.802l-.63-.161a32 32 0 0 0-5.052-.813l-.313-.026l-.177-.255a31.5 31.5 0 0 0-3.229-3.958l-.453-.464l.453-.464c3.328-3.417 6.5-4.766 8.479-3.625c2.016 1.161 2.417 4.495 1.099 9.141zm-5.255-2.276a33 33 0 0 1 4.313.672c.917-3.583.677-6.24-.646-7.005c-1.318-.76-3.797.406-6.401 2.943a34 34 0 0 1 2.734 3.391zM9.609 30.234c-.563.01-1.12-.13-1.609-.411c-2.016-1.161-2.417-4.49-1.099-9.135l.177-.625l.63.156c1.542.391 3.24.661 5.047.813l.313.031l.177.255a31.5 31.5 0 0 0 3.229 3.958l.453.464l-.453.464c-2.526 2.604-4.969 4.031-6.865 4.031zm-1.588-8.567c-.917 3.583-.677 6.24.646 7.005c1.318.75 3.792-.406 6.401-2.943a33 33 0 0 1-2.734-3.396a32.5 32.5 0 0 1-4.313-.667zm7.979.838c-1.099 0-2.224-.047-3.354-.141l-.313-.026l-.182-.26a40 40 0 0 1-1.797-2.828a40 40 0 0 1-1.557-2.969l-.135-.286l.135-.286a40.5 40.5 0 0 1 3.354-5.797l.182-.26l.313-.026a40 40 0 0 1 6.708 0l.313.026l.182.26a40 40 0 0 1 3.354 5.797l.135.286l-.135.286a39.6 39.6 0 0 1-3.354 5.797l-.182.26l-.313.026a41 41 0 0 1-3.354.141m-2.927-1.448c1.969.151 3.885.151 5.859 0a39 39 0 0 0 2.927-5.063a37.5 37.5 0 0 0-2.932-5.063a38 38 0 0 0-5.854 0a37 37 0 0 0-2.932 5.063a38.6 38.6 0 0 0 2.932 5.063"></path>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M10.99 1.974c2.92-1.86 6.957-.992 9.001 1.934a6.27 6.27 0 0 1 1.072 4.74a5.9 5.9 0 0 1-.88 2.198c.64 1.221.855 2.62.61 3.977a5.88 5.88 0 0 1-2.657 3.94l-5.127 3.268c-2.92 1.86-6.957.993-9.002-1.933a6.27 6.27 0 0 1-1.07-4.741a5.9 5.9 0 0 1 .88-2.198a6.2 6.2 0 0 1-.611-3.977a5.88 5.88 0 0 1 2.658-3.94zM8.049 20.25c.782.29 1.633.332 2.44.123c.369-.099.72-.253 1.042-.458l5.128-3.267a3.54 3.54 0 0 0 1.598-2.37a3.77 3.77 0 0 0-.645-2.85a4.07 4.07 0 0 0-4.37-1.62c-.369.099-.72.253-1.042.458l-1.957 1.246a1.1 1.1 0 0 1-.314.138a1.227 1.227 0 0 1-1.5-.899a1.1 1.1 0 0 1-.01-.45a1.07 1.07 0 0 1 .48-.713l5.129-3.268a1.1 1.1 0 0 1 .314-.138a1.23 1.23 0 0 1 1.317.489c.157.222.23.492.207.762l-.018.19l.191.058a6.6 6.6 0 0 1 2.005 1.003l.263.192l.096-.295q.078-.235.123-.478a3.77 3.77 0 0 0-.644-2.85a4.07 4.07 0 0 0-4.371-1.621a3.7 3.7 0 0 0-1.042.458L7.34 7.357a3.54 3.54 0 0 0-1.6 2.37a3.77 3.77 0 0 0 .645 2.85a4.07 4.07 0 0 0 4.371 1.62c.369-.099.72-.253 1.042-.457l1.956-1.248q.148-.093.315-.137a1.23 1.23 0 0 1 1.5.899c.034.147.037.3.011.449a1.07 1.07 0 0 1-.482.713l-5.127 3.269a1.1 1.1 0 0 1-.314.137a1.23 1.23 0 0 1-1.317-.488a1.15 1.15 0 0 1-.207-.762l.017-.19l-.19-.058a6.6 6.6 0 0 1-2.005-1.003l-.263-.192l-.096.295a4 4 0 0 0-.123.478a3.77 3.77 0 0 0 .644 2.85a4.07 4.07 0 0 0 1.93 1.498"></path>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m4-14h-1.35v4H16zM9.346 9.71l6.059 7.828l1.054-.809L9.683 8H8v7.997h1.346z"></path>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M6.757 1.501L4 18.5L9.473 4.816L7.695 1.353a.5.5 0 0 0-.938.148m4.807 2.817L4 18.5l9.84-11.55l-1.399-2.623a.5.5 0 0 0-.877-.01m-.624 18.52L4 18.5L17.31 5.665a.5.5 0 0 1 .832.296L20 18.5l-6.94 4.337a2 2 0 0 1-2.12 0"></path>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.02em" height="1em" viewBox="0 0 65 64">
                                            <path fill="currentColor" fillRule="evenodd" d="M17.86 26q3-12 15-12c12 0 13.5 9 19.5 10.5q6 1.5 10.5-4.5q-3 12-15 12c-12 0-13.5-9-19.5-10.5q-6-1.5-10.5 4.5m-15 18q3-12 15-12c12 0 13.5 9 19.5 10.5q6 1.5 10.5-4.5q-3 12-15 12c-12 0-13.5-9-19.5-10.5q-6-1.5-10.5 4.5" clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="1em" viewBox="0 0 50 50">
                                            <path fill="currentColor" d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="flex justify-between">
                                Low End
                                <div className="grid grid-flow-col gap-2 w-[12%] h-full">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="1em" viewBox="0 0 50 50">
                                            <path fill="currentColor" d="M 43.910156 12.003906 L 27.070313 2.539063 C 25.792969 1.824219 24.207031 1.824219 22.929688 2.539063 L 6.089844 12.003906 C 4.800781 12.726563 4 14.082031 4 15.535156 L 4 34.464844 C 4 35.917969 4.800781 37.273438 6.089844 37.996094 L 22.929688 47.460938 C 23.570313 47.820313 24.285156 48 25 48 C 25.714844 48 26.429688 47.820313 27.070313 47.460938 L 43.910156 37.996094 C 45.199219 37.273438 46 35.917969 46 34.464844 L 46 15.535156 C 46 14.082031 45.199219 12.726563 43.910156 12.003906 Z M 25 37 C 18.382813 37 13 31.617188 13 25 C 13 18.382813 18.382813 13 25 13 C 28.78125 13 32.273438 14.753906 34.542969 17.742188 L 30.160156 20.277344 C 28.84375 18.835938 26.972656 18 25 18 C 21.140625 18 18 21.140625 18 25 C 18 28.859375 21.140625 32 25 32 C 26.972656 32 28.84375 31.164063 30.160156 29.722656 L 34.542969 32.257813 C 32.273438 35.246094 28.78125 37 25 37 Z M 37 26 L 35 26 L 35 28 L 33 28 L 33 26 L 31 26 L 31 24 L 33 24 L 33 22 L 35 22 L 35 24 L 37 24 Z M 44 26 L 42 26 L 42 28 L 40 28 L 40 26 L 38 26 L 38 24 L 40 24 L 40 22 L 42 22 L 42 24 L 44 24 Z"></path>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg height="1em" viewBox="0 0 50.4 72.401" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#000" strokeWidth="0.25mm" fill="#fff" ><path d="M 49.6 5.1 L 49.6 12.8 L 47.6 13.8 Q 44.4 11.2 40.1 9.5 A 23.633 23.633 0 0 0 34.852 8.126 A 31.81 31.81 0 0 0 30.2 7.8 A 23.603 23.603 0 0 0 23.749 8.655 A 20.325 20.325 0 0 0 19.3 10.5 A 16.008 16.008 0 0 0 14.226 15.09 Q 12.83 16.997 11.75 19.45 A 27.729 27.729 0 0 0 10.102 24.64 Q 9 29.629 9 36.4 A 61.454 61.454 0 0 0 9.435 43.987 Q 10.441 52.049 13.778 56.77 A 16.727 16.727 0 0 0 14.65 57.9 A 18.088 18.088 0 0 0 24.269 63.772 Q 27.295 64.548 30.912 64.597 A 36.184 36.184 0 0 0 31.4 64.6 Q 36.1 64.6 40.25 63.35 A 25.663 25.663 0 0 0 45.823 60.889 A 31.659 31.659 0 0 0 48.4 59.2 L 50.4 60.2 L 50.4 67.9 Q 46.3 70.1 41.6 71.25 A 40.47 40.47 0 0 1 34.483 72.309 A 48.065 48.065 0 0 1 31.5 72.4 A 41.635 41.635 0 0 1 23.753 71.718 Q 18.311 70.687 14.1 68.1 A 26.323 26.323 0 0 1 4.186 57.064 A 32.407 32.407 0 0 1 3.55 55.7 Q 0.215 48.091 0.014 37.745 A 68.919 68.919 0 0 1 0 36.4 Q 0 23.7 4.1 15.7 A 30.96 30.96 0 0 1 8.729 8.924 A 25.162 25.162 0 0 1 15.1 3.85 A 30.686 30.686 0 0 1 29.616 0.009 A 36.203 36.203 0 0 1 30.4 0 A 38.92 38.92 0 0 1 39.293 0.996 A 35.91 35.91 0 0 1 40.5 1.3 Q 45.3 2.6 49.6 5.1 Z" vectorEffect="non-scaling-stroke" /></g></svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div id="projects" className="sm:p-4 p-1 sm:m-5 m-2 mt-[100px]">
                            <br />
                            <br />
                            <h1 className="text-6xl text-zinc-300 mb-4 mt-4">
                                Projects
                            </h1>
                            <Divider />
                            <div className="mt-[100px] text-center flex flex-col items-center justify-end gap-10 text-8xl">
                                <a href="https://nuranote.web.app">
                                    <Card isFooterBlurred className="sm:w-[500px] w-[300px]">
                                        <Image src="/NuraNote.png" alt="NuraNote" />

                                        <CardFooter className="justify-start before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                            <p className="text-tiny text-white/80">NuraNote</p>
                                        </CardFooter>
                                    </Card>
                                </a>
                                <a href="https://inzota.com">
                                    <Card isFooterBlurred className="sm:w-[500px] w-[300px]">
                                        <Image src="/inzota.png" alt="inzota" />

                                        <CardFooter className="justify-start before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                            <p className="text-tiny text-white/80">inzota</p>
                                        </CardFooter>
                                    </Card>
                                </a>
                            </div>
                        </div>
                        <div id="about" className="sm:p-4 p-1 sm:m-5 m-2 mt-[100px] w-[990px]">
                            <br />
                            <br />

                            <h1 className="text-6xl text-zinc-300 mb-4 mt-4">
                                About Me
                            </h1>
                            <Divider />
                            <div className="text-wrap text-sm text-zinc-200">
                                Hi there i am Ayan Mahajan also known as MQuery, I am a full stack / low end developer.
                                In my free time i like to create new apps that help me improve my workflow effenciy and improves my day to day life task.
                                I like to create apps that helps users improve there workflow and help them doing there day to day tasks through my code.
                                <br />
                                <br />

                                I create apps with such designs that helps people understand what the function of the apps are right away no clutter at all.
                                with minimal design and modern consepts and UI / UX designing. apps created are as simple as they can be while providing the most functionality.
                            </div>
                        </div>
                        <div id="contact" className="sm:p-4 p-1 sm:m-5 m-2 mt-[100px] w-[990px]">
                            <br />
                            <br />

                            <h1 className="text-6xl text-zinc-300 mb-4 mt-4">
                                Contact Me
                            </h1>
                            <Divider />
                            <div className="text-wrap text-sm text-zinc-200 w-full">
                                <form
                                    action="https://formspree.io/f/xnqekwzy"
                                    method="POST"
                                    className="flex flex-col gap-3 "
                                >
                                    <label>
                                        <br />
                                        <input
                                            type="email"
                                            name="email"
                                            className="rounded-full bg-transparent border-2 outline-zinc-700 outline-2 border-zinc-700 w-full p-4 text-sm"
                                            placeholder="Email"
                                        />
                                    </label>
                                    <label>
                                        <br />
                                        <textarea
                                            name="message"
                                            placeholder="Message"
                                            className="rounded-3xl bg-transparent border-2 outline-zinc-700 outline-2 border-zinc-700 w-full h-[500px] p-4 text-sm"
                                        ></textarea>
                                    </label>
                                    <Button type="submit" className="bg-zinc-700">Send</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

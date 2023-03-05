import Image from "next/image";

export const TokenBox = (props: any) => {
    return (
        <div
            className={`flex items-center w-full h-24 p-4  text-3xl rounded-3xl text-gray-700 mb-3 bg-gray-600/75 `}
        >
            <input
                type="text"
                className="w-4/5 focus:outline-none bg-transparent text-white"
                placeholder="0"
                onChange={props.onChange}
                {...props}
            />
        </div>
    );
};

export const FullButton = (props: any) => {
    return (
        <button
            type="button"
            {...props}
            className={`h-16 w-full px-4 py-2 border border-transparent font-bold text-xl text-center rounded-2xl text-purple-900 bg-purple-500  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition ease-in-out duration-200 ${props.disabled && "cursor-not-allowed"
                } ${!props.disabled && "hover:bg-purple-700 hover:text-purple-300"}`}
            disabled={props.disabled}
        >
            {props.loading && (
                <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-purple-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                </svg>
            )}
            {props.children} <span className="text-3xl">{props.emoji}</span>
        </button>
    );
};

export const Button = (props: any) => {
    return (
        <button
            type="button"
            {...props}
            className={`h-16 px-4 py-2 border border-transparent font-bold text-xl text-center rounded-2xl text-purple-900 bg-purple-500 hover:bg-purple-700 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition ease-in-out duration-200 ${props.disabled && "cursor-not-allowed"
                }`}
            disabled={props.disabled}
        >
            {props.disabled && (
                <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                </svg>
            )}
            {props.children}
        </button>
    );
};

export const Container = (props: any) => {
    return (
        <div className="md:container md:w-2/5 space-y-4 mt-4 mb-10 mx-4">
            {props.children}
        </div>
    );
};

export const Paper = (props: any) => {
    return (
        <div className="p-6 text-left rounded-lg shadow-lg bg-white">
            {props.children}
        </div>
    );
};

export const Label = (props: any) => {
    return (
        <div className=" text-md md:text-lg mb-2">
            <span className="text-white font-semibold">{props.children}</span>{" "}
        </div>
    );
};

export const Textbox = (props: any) => {
    return (
        <input
            type="text"
            className="w-full p-2 border rounded-md text-gray-700 focus:outline-none focus:border-purple-600 mb-3"
            {...props}
        />
    );
};

export const Textarea = (props: any) => {
    return (
        <textarea
            type="text"
            className="w-full resize-none mt-1 p-2 border rounded-md text-gray-700 focus:outline-none focus:border-purple-600"
            rows="7"
            {...props}
        />
    );
};

export const SecondaryButton = (props: any) => {
    return (
        <button
            type="button"
            {...props}
            className={`inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition ease-in-out duration-200 ${props.disabled && "cursor-not-allowed"
                }`}
            disabled={props.disabled}
        >
            {props.disabled && (
                <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                </svg>
            )}
            {props.children}
        </button>
    );
};
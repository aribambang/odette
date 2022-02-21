import { memo } from 'react';

const Toaster = ({ isError, isShow }) => {
    const position = isShow ? 'top-6' : '-top-14';
    const textColor = isError ? 'text-red-500' : 'text-green-500';
    const bgColor = isError ? 'bg-red-500' : 'bg-green-500';
    const borderColor = isError ? 'border-red-700' : 'border-green-700';
    const text = isError ? 'Gagal mengirim pesan' : 'Berhasil mengirim pesan';

    return (
        <div
            className={`fixed z-50 transition-all duration-300 flex items-center py-2 px-3 mb-2 shadow-md border-l-4 ${position} ${bgColor} ${borderColor}`}
        >
            <div className={`rounded-full bg-white mr-3 ${textColor}`}>
                {isError ? (
                    <svg
                        width="1.8em"
                        height="1.8em"
                        viewBox="0 0 16 16"
                        className="bi bi-x"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
                        />
                        <path
                            fillRule="evenodd"
                            d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
                        />
                    </svg>
                ) : (
                    <svg
                        width="1.8em"
                        height="1.8em"
                        viewBox="0 0 16 16"
                        className="bi bi-check"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
                        />
                    </svg>
                )}
            </div>
            <div className="text-white max-w-xs ">{text}</div>
        </div>
    );
};

export default memo(Toaster);

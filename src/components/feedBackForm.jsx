import { useState } from "react";

const FeedBackForm = () => {
    const [input, setInput] = useState("");

    const handleSubmitForm = (e) => {
        e.preventDefault();
        // TODO: handle submission (send to API or state)
        console.log("Feedback submitted:", input);
        setInput("");
    };

    return (
        <form onSubmit={handleSubmitForm} className="p-4 bg-gray-500 rounded">
            <label htmlFor="feedback" className="sr-only">
                Feedback
            </label>
            <input
                id="feedback"
                name="feedback"
                type="text"
                value={input}
                placeholder="feedback here"
                onChange={(e) => setInput(e.target.value)}
                className="w-full p-2 rounded"
            />
            <button type="submit" className="px-3 py-1 mt-2 text-white bg-blue-600 rounded">
                Send
            </button>
        </form>
    );
};

export default FeedBackForm;
<form
    action = "https://formspree.io/f/mzzgoply"
    method = "POST"
    className = "max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-4"
>
    {/* Spam trap field */}
    <input type="text" name="_gotcha" style={{display: 'none'}} />

    {/* Redirect to thank-you page after successful submission */}
    <input type="hidden" name="_redirect" value="https://changhwah.github.io/thank-you.html" />

    <div>
        <label className = "block mb-1 font-medium">Name</label>
        <input
            type = "text"
            name = "name"
            required
            className = "w-full border border-gray-300 rounded p-2"
        />
    </div>

    <div>
        <label className = "block mb-1 font-medium">Email</label>
        <input
            type = "email"
            name = "email"
            required
            className = "w-full border border-gray-300 rounded p-2"
        />
    </div>

    <div>
        <label className = "block mb-1 font-medium">Message</label>
        <textarea
            name = "message"
            required
            row = "5"
            className = "w-full border border-gray-300 rounded p-2"
        ></textarea>
    </div>

    <button 
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
        Send
    </button>
</form>
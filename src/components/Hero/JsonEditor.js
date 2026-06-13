const JsonEditor = ({ name, role, bio }) => {
  const initialJson = {
    name: name,
    role: role,
    bio: bio,
  };

  const jsonString = JSON.stringify(initialJson, null, 2);
  const lines = jsonString.split("\n").length;

  return (
    <div className="flex bg-[#1e1e1e] rounded-md font-mono text-sm">
      <div className="px-2 py-2 text-right text-[#858585] bg-[#1e1e1e] border-r border-[#3c3c3c] select-none">
        {Array.from({ length: lines }, (_, i) => i + 1).map((num) => (
          <div key={num} className="min-h-[1.5em] text-xl">
            {num}
          </div>
        ))}
      </div>
      <textarea
        className="flex-1 p-3 bg-[#1e1e1e] text-[#d4d4d4] resize-y font-mono text-xl outline-none"
        value={jsonString}
        readOnly
        spellCheck={false}
      />
    </div>
  );
};

export default JsonEditor;

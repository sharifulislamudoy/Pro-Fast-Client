const KeyFeatureCard = ({ feature }) => {
    const { Title, Description, Image } = feature
    return (
        <div className="bg-white p-6 rounded-2xl">
            <div className="flex gap-5 flex-col lg:flex-row">
                <img
                    src={Image}
                    className="h-auto w-24 rounded-lg"
                />
                <div className="border border-dashed text-gray-400"></div>
                <div>
                    <h1 className="text-xl font-bold">{Title}</h1>
                    <p className="py-6">
                        {Description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default KeyFeatureCard;
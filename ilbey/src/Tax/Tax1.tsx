

const Tax1 = () => {
  return (
    <div className="grid-container bg-white px-4 md:px-8 py-16">
      <div className="grid md:grid-cols-2 gap-6">
        {/* İlk Grid Elemanı */}
        <div className="grid-item p-6">
        <p className="mt-0 mb-0 font-playfair text-[40px] font-normal leading-[1.4] text-[#003574]">
            Come to the Tax Professionals</p>
        </div>

        {/* İkinci Grid Elemanı */}
        <div className="grid-item  p-6">
        <p className="mb-[10px] text-[16px] leading-[1.6]">
            With ever-changing rules and regulations, handling taxes can be a complex and often time-consuming process. Lewis.cpa can help create a hassle-free experience by ensuring that your bookkeeping is accurate and your tax bill is as low as possible.</p>
        </div>
      </div>
    </div>
  );
};

export default Tax1;

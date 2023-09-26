import React from 'react'

type SynopsisModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SynopsisModal: React.FC<SynopsisModalProps> = ({ isOpen, onClose}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-start justify-center w-5/6">
        <div className="w-full flex justify-center">
          <h2 className="text-black font-bold text-xl mb-4">あらすじ</h2>
        </div>
        <div className="text-black">
          1988年9月28日、昭和の終わりに近づいた頃、古びた家に、父、母、そして娘の三人家族が暮らしていた。
          ある日、両親は急用が生じた。
          <div className="text-black my-2">
            <span className="block font-semibold">母「急がないとっ！」</span>
          </div>
          と言いながら、娘に留守番を頼む。その際、慌てていた母が部屋の神棚に置いてあった鏡をうっかり落とし亀裂が入ってしまう。
          <div className="text-black my-2">
            <span className="block font-semibold">「パリンッ」</span>
          </div>
          という音が響き渡った。
          時間もなかった為、両親はそのまま家を出ていき、疲れていた娘は家で深い眠りに落ちた。
          娘が目を覚ますと、彼女が知っている家とは違う、まるで別世界のような陰鬱な雰囲気に包まれていた。
          普段の温かみのある家は、何かに取り憑かれたかのように、地獄の景色を映し出していた。
        </div>
        <div className="text-black my-2">
          <span className="block font-semibold">娘「ここはどこ・・・？」</span>
        </div>
        <button className="mt-4 text-black self-center" onClick={onClose}>閉じる</button>
      </div>
    </div>
  )
}

export default SynopsisModal
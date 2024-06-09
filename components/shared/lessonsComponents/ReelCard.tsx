'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { FC, memo, useCallback, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import PopUpMore from './PopUpMore';

import { Reel } from '@/types/Reel';
import AudioOnIcon from '@/public/assets/icons/svg/AudioOnIcon';
import AudioOffIcon from '@/public/assets/icons/svg/AudioOffIcon';
import ImageIcon from '@/public/assets/icons/svg/ImageIcon';
import VideoIcon from '@/public/assets/icons/svg/VideoIcon';
import DirectIcon from '@/public/assets/icons/svg/DirectIcon';
import SaveIcon from '@/public/assets/icons/svg/SaveIcon';
import nFormatter from '@/components/shared/helpers/NumberFormatter';
import { Stream, StreamPlayerApi } from '@cloudflare/stream-react';
import MiniProfile from './MiniProfile';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import PopUpComments from './PopUpComments';
import { Comment } from '@/types/Comment';
import OnlyFansIcon from '@/public/assets/icons/svg/OnlyFansIcon';

interface Props {
  isMuted: boolean;
  setIsMuted: (isMuted: boolean) => void;
  reel: Reel;
  openDescription: boolean;
  setOpenDescription: (isOpen: boolean) => void
}

const tempComment = {
  id: 1,
  username: 'braydenking58',
  time: '1d.',
  text: 'are these raw photos or did you edit them?',
};

const ReelCard: FC<Props> = ({ reel, isMuted, setIsMuted, openDescription, setOpenDescription }) => {
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const vidRef = useRef<StreamPlayerApi | undefined>();
  const [isPlaying, setIsPlaying] = useState(true);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 1001));
  const [comments, setComments] = useState<Comment[]>([tempComment]);
  const [isLiked, setIsLiked] = useState(false);

  const pauseVideo = useCallback(() => {
    vidRef.current && vidRef.current.pause();
    setIsPlaying(false);
  }, [vidRef]);

  const playVideo = useCallback(() => {
    vidRef.current && vidRef.current.play();
    setIsPlaying(true);
  }, [vidRef]);

  const handleClick = useCallback(() => {
    if (vidRef.current) {
      isPlaying ? pauseVideo() : playVideo();
    }
  }, [playVideo, isPlaying, pauseVideo]);

  useEffect(() => {
    if (inView) {
      playVideo();
    } else {
      pauseVideo();
    }
  }, [inView, playVideo, pauseVideo]);

  const variants = {
    liked: {
      scale: [1.4, 1],
      transition: {
        ease: 'anticipate',
        duration: 0.5,
      },
    },
    notLiked: {
      scale: 1,
    },
  };

  const { description, cloudflare_video_id, ofmodel, id, } = reel;
  

  return (
    <div className="flex h-full relative">
       <div className="grow relative cursor-pointer">

        <div className="relative h-full overflow-hidden">
          <div
            className="absolute z-10 hover:bg-opacity-30 rounded-full bg-opacity-20 p-1.5 right-0 top-0 -translate-x-1/2 translate-y-1/2"
            onClick={() => {
              setIsMuted(!isMuted);
            }}>
            {isMuted ? <AudioOffIcon /> : <AudioOnIcon />}
          </div>

          <div
            className="overflow-hidden h-full md:rounded-md w-full flex items-center justify-center"
            onClick={() => handleClick()}
            ref={ref}>
            <Stream
              muted={isMuted}
              loop
              title="Video reel"
              autoplay={inView}
              streamRef={vidRef}
              src={cloudflare_video_id}
              preload="auto"
              className="h-full w-full md:aspect-[2/3] lg:aspect-9/16 pointer-events-none select-none"
            />
          </div>

          <div className="absolute flex flex-col gap-5 bottom-0 p-2 text-white text-sm">
            <div className="flex items-center gap-2">
              <MiniProfile model={ofmodel} />

              <div className="border-2 border-white rounded-full"></div>

              <button className="border border-white rounded border-opacity-40 px-2 py-1 bg-white bg-opacity-0 hover:bg-opacity-15">
                <a
                  target="_blank"
                  href={ofmodel.of_campaign_url}
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center">
                  Follow
                  <OnlyFansIcon className=" size-4" />
                </a>
              </button>
            </div>

            <div
              className="relative overflow-hidden"
              onClick={() => setOpenDescription(!openDescription)}>
              <div
                className={clsx(
                  "max-h-[1.2rem] transition-all w-full pr-20 after:content-['...more'] after:absolute after:top-0 after:-right-1 after:-translate-x-full after:text-[#BEBEBE]",
                  {
                    '!max-h-60 overflow-auto after:content-none': openDescription,
                  }
                )}>
                {description} 
              </div>
            </div>

            <div className="flex items-center text-xs gap-2 text-[#BEBEBE]">
              <div className="flex gap-1 items-center">
                <Heart width={12} /> 0
              </div>

              <div className="flex gap-1 items-center">
                <ImageIcon width={12} />0
              </div>

              <div className="flex gap-1 items-center">
                <VideoIcon width={12} />0
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={clsx(
          'flex flex-col justify-end gap-6 pb-2 w-12 md:mx-4 text-xs',
          'absolute md:static right-0 bottom-0'
        )}>
        <div className="flex flex-col items-center group transition-all cursor-pointer">
          <motion.div
            animate={isLiked ? 'liked' : 'notLiked'}
            initial={{ scale: 1 }}
            variants={variants}>
            <Heart
              onClick={() => {
                setIsLiked(!isLiked);
                isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
              }}
              className={clsx(isLiked && 'stroke-regularRed fill-regularRed')}
            />
          </motion.div>

          {nFormatter(likes)}
        </div>

        <div className="flex flex-col items-center group transition-all">
          <PopUpComments comments={comments} setComments={setComments} />

          {nFormatter(comments.length)}
        </div>

        <div className="flex justify-center group transition-all">
          <DirectIcon className="group-hover:scale-110 transition-all cursor-pointer" width={24} />
        </div>

        <div className="flex justify-center group transition-all">
          <SaveIcon className="group-hover:scale-110 transition-all cursor-pointer" width={24} />
        </div>

        <div className="relative flex justify-center transition-all">
          <PopUpMore />
        </div>

        <div className="flex justify-center">
          <div className="w-6 h-6 border border-darkBorder overflow-hidden dark:border-lightBorder rounded">
            <Image
              src="https://i.imgur.com/waaK1BK.png"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ReelCard);

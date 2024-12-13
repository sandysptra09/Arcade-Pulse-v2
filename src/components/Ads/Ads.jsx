import React from 'react'

export default function Ads() {
    return (
        <div>
            <div className='grid md:grid-cols-3 gap-6'>
                <img
                    alt="Thumbnail of Game"
                    src='https://cdn2.unrealengine.com/brave-app-2560x1440-4d0a289f62b9.jpg'
                    className="h-full w-full rounded-t-xl rounded-b-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                />

                <img
                    alt="Thumbnail of Game"
                    src='https://cdn1-production-images-kly.akamaized.net/0qwHPBiGxNv91pYecDVevLNqTvc=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4686008/original/029869100_1702535734-epic_games_holiday.jpg'
                    className="h-full w-full rounded-t-xl rounded-b-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                />

                <img
                    alt="Thumbnail of Game"
                    src='https://assets-static.invideo.io/images/large/image_47_8c67712d46.webp'
                    className="h-full w-full rounded-t-xl rounded-b-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                />
            </div>
        </div>
    )
}

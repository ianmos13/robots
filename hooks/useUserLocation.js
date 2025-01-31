import { useState, useEffect } from 'react';

const useUserLocation = () => {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cachedLocation = window.localStorage.getItem('userLocation');
        if (cachedLocation) {
            setLocation(cachedLocation);
            return;
        }

        if (!navigator.geolocation) {
            setError('Геолокация не поддерживается вашим браузером');
            return;
        }
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;

                try {
                    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=ru&key=${process.env.NEXT_PUBLIC_BIGDATA_CLOUD_KEY}`);
                    if (!response.ok) {
                        throw new Error('УУУпс... Что-то пошло не так');
                    }
                    const data = await response.json();
                    setLocation(data.city || 'Неизвестный город');
                } catch (err) {
                 
                    setError('Не удалось получить ваше местоположение');
                }
            },
            (error) => {
                setError('Не удалось получить ваше местоположение');
            }
        );
    }, []);

    return { location, error };
};

export default useUserLocation;
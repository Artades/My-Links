import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectItem from '@/components/projects/ProjectItem';
import {ProjectProps} from '@/interfaces/project.interface';
import SkeletonProjectItem from '@/components/projects/SkeletonProjectItem';

const Projects = () => {
    const [projects, setProjects] = useState<ProjectProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getProjects = async () => {
            try {
                const response = await axios.get('https://api.github.com/user/repos', {
                    headers: {
                        Authorization: 'Bearer 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',
                    },
                    params: {
                        sort: 'updated',
                        direction: 'desc',
                        per_page: '10',
                    },
                });
                setProjects(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };

        getProjects();
    }, []);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="w-full my-5 bg-zinc-800 rounded-lg p-5 bg-gradient-to-l from-indigo-900">
            <div className="">
                <Slider {...settings} className="w-full w-full flex items-center">
                    {isLoading ? (


                        <SkeletonProjectItem/>


                    ) : (

                        projects.map((project) => (
                            <ProjectItem
                                key={project.id}
                                name={project.name}
                                created_at={project.created_at}
                                description={project.description}
                                id={project.id}
                                owner={project.owner}
                                language={project.language}
                            />
                        ))
                    )}
                </Slider>
            </div>
        </div>
    );
};

export default Projects;

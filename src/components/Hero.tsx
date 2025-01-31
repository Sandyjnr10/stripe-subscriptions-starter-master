import Image from "next/image";
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
	return (
		<div className='hero-section'>
			<section className='container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 '>
				<div className='text-center lg:text-start space-y-6'>
					<main className='text-5xl md:text-6xl font-bold text-balance'>
						<h1 className='inline'>
							<span className='inline bg-gradient-to-r from-[#6f4e37] to-[#6f4e37] text-transparent bg-clip-text'>
								Greetings from the Advanced Media Library!
							</span>{" "}
						
						</h1>{" "}
						
					</main>
					{/* <a href=''>
						<img src='https://made-with.prisma.io/dark.svg' width={220} height={130} alt='' />
					</a> */}

					<p className='text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0 text-balance'>
						Award Winning Books availible Now!
					</p>

					<div className='space-y-4 md:space-y-0 md:space-x-4'>
						<Button className='w-full md:w-1/3'>Get Started</Button>

					
					</div>
				</div>

				<div className='z-10'>
					<Image
						src='/lib.png'
						width={986}
						height={512}
						alt=''
						className='rounded-md select-none pointer-events-none'
					/>
				</div>
			</section>
		</div>
	);
};

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import PaymentLink from "./PaymentLink";

enum PopularPlanType {
	NO = 0,
	YES = 1,
}

interface PricingProps {
	title: string;
	popular: PopularPlanType;
	price: number;
	buttonText: string;
	href: string;
	billing: string;
	paymentLink?: string;
}

const pricingList: PricingProps[] = [
	{
		title: "Free",
		popular: 0,
		price: 0,
		buttonText: "Get Started",
		href: "/api/auth/login",
		billing: "/month",
	},
	{
		title: "Bronze",
		popular: 1,
		price: 6.99,
		buttonText: "Buy Now",
		href: "/api/auth/login",
		paymentLink: process.env.STRIPE_MONTHLY_PLAN_LINK,
		billing: "/month",
	},
	{
		title: "Platinum",
		popular: 0,
		price: 78,
		buttonText: "Buy Now",
		href: "/api/auth/login",
		paymentLink: process.env.STRIPE_YEARLY_PLAN_LINK,
		billing: "/year",
	},
];

export const Pricing = () => {
	return (
		<section id='pricing' className='container py-24 sm:py-32'>
			<h2 className='text-3xl md:text-4xl font-bold text-center'>
			Your Membership Journey Begins
				
				Now
			</h2>
			<h3 className='text-xl text-center text-muted-foreground pt-4 pb-8'>
				
			</h3>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{pricingList.map((pricing: PricingProps) => (
					<Card
						key={pricing.title}
						className={
							pricing.popular === PopularPlanType.YES
								? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
								: ""
						}
					>
						<CardHeader>
							<CardTitle className='flex item-center justify-between'>
								{pricing.title}
								{pricing.popular === PopularPlanType.YES ? (
									<Badge variant='secondary' className='text-sm text-primary'>
										Most popular
									</Badge>
								) : null}
							</CardTitle>
							<div>
								<span className='text-3xl font-bold'>${pricing.price}</span>
								<span className='text-muted-foreground'> {pricing.billing}</span>
							</div>
						</CardHeader>

						<CardContent>
							<PaymentLink
								href={pricing.href}
								text={pricing.buttonText}
								paymentLink={pricing.paymentLink}
							/>
						</CardContent>

						<hr className='w-4/5 m-auto mb-4' />

						<CardFooter className='flex'>
							<div className='space-y-4'>
							</div>
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
};

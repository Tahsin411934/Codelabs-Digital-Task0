import { Button, Navbar } from 'flowbite-react';

const Header = () => {
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(to right, #e2e2ea, #e7e7ee, #ededf2, #f2f2f6, #f8f8fa, #f8f8fa, #f8f8fa, #f8f8fa, #f2f2f6, #ededf2, #e7e7ee, #e2e2ea)`,
                height: '100px',
                paddingTop: '1rem',
            }}
        >
            {/*website logo */}
            <Navbar fluid rounded className="bg-transparent  container lg:w-[1160px] mt-3 mx-auto font-Inter">
                <Navbar.Brand href="#">
                    <img
                        width={100}
                        height={100}
                        src="logo dark.png"
                        className="mr-3 h-6 sm:h-9"
                        alt="Logo"
                    />
                </Navbar.Brand>

    {/* Navbar manu start */}
                <div className="flex md:order-2">
                    <Button className="bg-transparent font-medium hover:text-white text-base text-[#020043] border border-[#020043]">
                        Appointment
                    </Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="#" className="font-normal text-base">
                        Home
                    </Navbar.Link>
                    <Navbar.Link
                        href="#"
                        className="font-normal text-base text-textPrimaryColor"
                    >
                        Services
                    </Navbar.Link>
                    <Navbar.Link
                        href="#"
                        className="font-normal text-base text-textPrimaryColor"
                    >
                        Blog
                    </Navbar.Link>
                    <Navbar.Link
                        href="#"
                        className="font-normal text-base text-textPrimaryColor"
                    >
                        About
                    </Navbar.Link>
 {/* Navbar manu end */}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;

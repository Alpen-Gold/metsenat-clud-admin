import { Button } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { open } from "../../store/slices/drawerSlice";
import { Container } from "./container";
import { imageLogo } from "../../image/logo";

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className=" bg-white p-2 pb-0 pt-5">
      <Container>
        <div className="flex items-center justify-between">
          <div>{imageLogo()}</div>

          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center py-1 rounded-md pr-1 pl-2 gap-4 bg-[#F1F1F3]">
              <p className="p-0 m-0">Shohrux</p>

              <span className="bg-green-500 p-1 pt-2 rounded-md pb-0 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.621 17.38C15.243 18.118 13.669 18.54 11.998 18.54C10.328 18.54 8.755 18.12 7.377 17.38C4.401 18.162 2.069 20.015 1 24H23C21.931 20.014 19.599 18.161 16.621 17.38ZM12 16C16.418 16 20 12.418 20 8C20 3.582 16.418 0 12 0C7.582 0 4 3.582 4 8C4 12.418 7.582 16 12 16ZM17.349 10.667C16.364 12.635 14.351 14 12 14C9.649 14 7.636 12.635 6.651 10.667H17.349Z"
                    fill="#F1F1F3"
                  />
                </svg>
              </span>
            </div>

            <svg
              // onClick={() => props.setAdminActivated(false)}
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M10 16C10 15.7348 10.1054 15.4804 10.2929 15.2929C10.4804 15.1054 10.7348 15 11 15H20V8.5C20 6.5 17.8881 5 16 5H6.5C5.57205 5.00099 4.68238 5.37006 4.02622 6.02622C3.37006 6.68238 3.00099 7.57205 3 8.5V23.5C3.00099 24.428 3.37006 25.3176 4.02622 25.9738C4.68238 26.6299 5.57205 26.999 6.5 27H16.5C17.428 26.999 18.3176 26.6299 18.9738 25.9738C19.6299 25.3176 19.999 24.428 20 23.5V17H11C10.7348 17 10.4804 16.8946 10.2929 16.7071C10.1054 16.5196 10 16.2652 10 16Z"
                fill="#B1B1B8"
              />
              <path
                d="M28.7069 15.2931L23.7069 10.2931C23.5178 10.1135 23.2661 10.0148 23.0053 10.0182C22.7445 10.0215 22.4954 10.1266 22.311 10.311C22.1266 10.4954 22.0215 10.7445 22.0182 11.0053C22.0148 11.2661 22.1135 11.5178 22.2931 11.7069L25.5856 15H20V17H25.5856L22.2931 20.2931C22.1964 20.3851 22.119 20.4954 22.0655 20.6177C22.0121 20.7401 21.9837 20.8718 21.982 21.0053C21.9803 21.1388 22.0053 21.2712 22.0556 21.3949C22.1059 21.5185 22.1804 21.6308 22.2748 21.7252C22.3692 21.8196 22.4815 21.8941 22.6051 21.9444C22.7288 21.9947 22.8612 22.0197 22.9947 22.018C23.1282 22.0163 23.2599 21.9879 23.3822 21.9345C23.5046 21.881 23.6149 21.8036 23.7069 21.7069L28.7069 16.7069C28.8943 16.5194 28.9995 16.2651 28.9995 16C28.9995 15.7349 28.8943 15.4806 28.7069 15.2931Z"
                fill="#B1B1B8"
              />
            </svg>
          </div>
        </div>
      </Container>
    </div>
  );
};

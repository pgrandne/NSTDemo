import { useState } from "react";
import { Label, TokenBox, FullButton } from "./ui";
import { useSignMessage } from 'wagmi'

export const ExchangeForm = (props: any) => {
    const { signMessage } = useSignMessage({
        message: 'Request an NST exchange',
    })

    const [isValid, setIsValid] = useState(false);
    const [value, setValue] = useState(null);


    return (
        <div>
            <div className="float-right">
                <Label>
                    Balance: 2 NST
                </Label>
            </div>
            <TokenBox
                ticker="ETH"
                alt="eth logo"
                value={value}
                onChange={(e: any) => {
                    // console.log(e.target.value);
                    let val = e.target.value;

                    if (val.length > 0) {
                        if (!/([0-9.])$/.test(val)) {
                            console.log("go away");
                            setIsValid(false);
                        } else {
                            setIsValid(true);
                            setValue(val);
                        }
                    } else {
                        setIsValid(true);
                        setValue(null);
                    }
                }}
                isInValid={!isValid || value === 0.0}
            />

            <div className="float-right">
                <Label>
                    NST available for exchange: 7 NST
                </Label>
            </div>
            <TokenBox
                ticker="WFL"
                alt="wfl logo"
                value={value}
            />
            <FullButton
                emoji="🔃"
                disabled={!isValid || !value || props.loading}
                onClick={() => signMessage()}
            >
                EXCHANGE{" "}
            </FullButton>
        </div>
    );
};
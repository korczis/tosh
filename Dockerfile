FROM elixir:1.7

RUN mkdir /src
WORKDIR /src

RUN curl https://sh.rustup.rs -sSf | sh -s -- -y --default-toolchain nightly \
    && export PATH=$HOME/.cargo/bin:$PATH \
    && rustup update \
    && rustc -Vv \
    && cargo -V \
    && rustup component add rust-src

RUN mix local.hex --force \
  && mix local.rebar --force

ADD . .

RUN mix deps.get \
  && mix deps.compile

FROM node:24-bookworm 

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        git \
        wget \
    && rm -rf /var/lib/apt/lists/*

# Install zsh
RUN apt-get update \
    && apt-get install -y --no-install-recommends zsh \
    && rm -rf /var/lib/apt/lists/*

RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

RUN echo "export PATH=/usr/local/go/bin:${PATH}" >> /root/.zshrc

RUN chsh -s /bin/zsh root

ENTRYPOINT [ "/bin/zsh" ]
